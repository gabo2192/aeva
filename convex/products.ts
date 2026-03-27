import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getProduct = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getStock = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
    return product?.stock ?? 0;
  },
});

export const reserveStock = mutation({
  args: {
    slug: v.string(),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!product) {
      throw new Error("Product not found");
    }

    if (product.stock < args.quantity) {
      throw new Error("Not enough stock");
    }

    await ctx.db.patch(product._id, {
      stock: product.stock - args.quantity,
    });

    return { success: true, remainingStock: product.stock - args.quantity };
  },
});

export const releaseStock = mutation({
  args: {
    slug: v.string(),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    if (!product) return;

    await ctx.db.patch(product._id, {
      stock: product.stock + args.quantity,
    });
  },
});

// Run once to seed the product
export const seedProduct = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", "tira-nasal-aeva"))
      .first();

    if (existing) return existing._id;

    return ctx.db.insert("products", {
      name: "Tira Nasal AEVA x 30 días",
      slug: "tira-nasal-aeva",
      unitPrice: 69,
      originalPrice: 185,
      stock: 100,
    });
  },
});
