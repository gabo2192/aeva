import { preference } from "@/lib/mercado-pago";
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  const { quantity } = await request.json();

  const unitPrice = 99;
  const totalAmount = quantity * unitPrice;

  const response = await preference.create({
    body: {
      items: [
        {
          id: "1",
          title: "Tira Nasal AEVA x 30 días",
          quantity,
          unit_price: unitPrice,
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_APP_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL}/pending`,
      },
      auto_return: "approved",
      notification_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mercadopago`,
    },
  });

  // Create order in Convex
  await convex.mutation(api.orders.createOrder, {
    quantity,
    unitPrice,
    totalAmount,
    mpPreferenceId: response.id!,
  });

  return NextResponse.json({ init_point: response.init_point });
}
