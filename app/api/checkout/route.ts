import { preference } from "@/lib/mercado-pago";
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const getProduct = makeFunctionReference<"query">("products:getProduct");
const getStock = makeFunctionReference<"query">("products:getStock");
const reserveStock = makeFunctionReference<"mutation">("products:reserveStock");
const createOrder = makeFunctionReference<"mutation">("orders:createOrder");

export async function POST(request: NextRequest) {
  const { quantity } = await request.json();

  // Get product info from Convex
  const product = await convex.query(getProduct, { slug: "tira-nasal-aeva" });
  const unitPrice = product?.unitPrice ?? 69;
  const totalAmount = quantity * unitPrice;

  // Check stock availability
  const stock = await convex.query(getStock, { slug: "tira-nasal-aeva" });
  if (stock < quantity) {
    return NextResponse.json(
      { error: "Sin stock suficiente", availableStock: stock },
      { status: 400 }
    );
  }

  // Reserve stock
  await convex.mutation(reserveStock, {
    slug: "tira-nasal-aeva",
    quantity,
  });

  const response = await preference.create({
    body: {
      items: [
        {
          id: "1",
          title: product?.name ?? "Tira Nasal AEVA x 30 días",
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
  await convex.mutation(createOrder, {
    quantity,
    unitPrice,
    totalAmount,
    mpPreferenceId: response.id!,
  });

  return NextResponse.json({ init_point: response.init_point });
}
