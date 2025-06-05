import { preference } from "@/lib/mercado-pago";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { quantity } = await request.json();
  const response = await preference.create({
    body: {
      items: [
        {
          id: "1",
          title: "Tira Nasal AEVA x 30 días",
          quantity,
          unit_price: 99,
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_APP_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_APP_URL}/pending`,
      },
      auto_return: "approved",
    },
  });
  return NextResponse.json({ init_point: response.init_point });
}
