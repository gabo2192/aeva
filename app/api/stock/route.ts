import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const getProduct = makeFunctionReference<"query">("products:getProduct");

export async function GET() {
  try {
    const product = await convex.query(getProduct, { slug: "tira-nasal-aeva" });
    if (!product) {
      return NextResponse.json({
        stock: 0,
        unitPrice: 69,
        originalPrice: 185,
        name: "Tira Nasal AEVA",
      });
    }
    return NextResponse.json({
      stock: product.stock,
      unitPrice: product.unitPrice,
      originalPrice: product.originalPrice,
      name: product.name,
    });
  } catch {
    return NextResponse.json({
      stock: 0,
      unitPrice: 69,
      originalPrice: 185,
      name: "Tira Nasal AEVA",
    });
  }
}
