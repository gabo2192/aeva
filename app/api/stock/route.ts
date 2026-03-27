import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const getStock = makeFunctionReference<"query">("products:getStock");

export async function GET() {
  try {
    const stock = await convex.query(getStock, { slug: "tira-nasal-aeva" });
    return NextResponse.json({ stock });
  } catch {
    return NextResponse.json({ stock: 0 });
  }
}
