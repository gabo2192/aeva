import { client } from "@/lib/mercado-pago";
import { formatOrderNotification, sendTelegramNotification } from "@/lib/telegram";
import { Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const updateOrderStatus = makeFunctionReference<"mutation">("orders:updateOrderStatus");
const markTelegramNotified = makeFunctionReference<"mutation">("orders:markTelegramNotified");

function mapMpStatus(
  status: string
): "approved" | "pending" | "rejected" | "in_process" | "cancelled" {
  const statusMap: Record<string, "approved" | "pending" | "rejected" | "in_process" | "cancelled"> = {
    approved: "approved",
    pending: "pending",
    authorized: "pending",
    in_process: "in_process",
    in_mediation: "in_process",
    rejected: "rejected",
    cancelled: "cancelled",
    refunded: "cancelled",
    charged_back: "cancelled",
  };
  return statusMap[status] || "pending";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Mercado Pago sends different types of notifications
    if (body.type !== "payment" && body.action !== "payment.updated" && body.action !== "payment.created") {
      return NextResponse.json({ received: true });
    }

    const paymentId = body.data?.id;
    if (!paymentId) {
      return NextResponse.json({ received: true });
    }

    // Fetch payment details from Mercado Pago
    const payment = new Payment(client);
    const paymentData = await payment.get({ id: paymentId });

    if (!paymentData) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const status = mapMpStatus(paymentData.status || "pending");
    const preferenceId = paymentData.metadata?.preference_id as string | undefined;

    // Update order in Convex
    const orderId = await convex.mutation(updateOrderStatus, {
      mpPaymentId: String(paymentId),
      mpPreferenceId: preferenceId,
      status,
      mpStatus: paymentData.status || undefined,
      customerEmail: (paymentData.payer?.email as string) || undefined,
      customerName:
        [paymentData.payer?.first_name, paymentData.payer?.last_name]
          .filter(Boolean)
          .join(" ") || undefined,
    });

    // Send Telegram notification
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      const message = formatOrderNotification({
        quantity: paymentData.metadata?.quantity
          ? Number(paymentData.metadata.quantity)
          : 1,
        totalAmount: paymentData.transaction_amount || 99,
        status,
        customerName:
          [paymentData.payer?.first_name, paymentData.payer?.last_name]
            .filter(Boolean)
            .join(" ") || undefined,
        customerEmail: (paymentData.payer?.email as string) || undefined,
        mpPaymentId: String(paymentId),
      });

      await sendTelegramNotification(telegramBotToken, telegramChatId, message);

      // Mark as notified
      if (orderId) {
        await convex.mutation(markTelegramNotified, { orderId });
      }
    }

    return NextResponse.json({ received: true, orderId });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
