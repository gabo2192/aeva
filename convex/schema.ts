import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    unitPrice: v.number(),
    originalPrice: v.number(),
    stock: v.number(),
  }).index("by_slug", ["slug"]),

  orders: defineTable({
    quantity: v.number(),
    unitPrice: v.number(),
    totalAmount: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("in_process"),
      v.literal("cancelled")
    ),
    mpPaymentId: v.optional(v.string()),
    mpPreferenceId: v.optional(v.string()),
    mpStatus: v.optional(v.string()),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
    notifiedTelegram: v.boolean(),
    stockDecremented: v.optional(v.boolean()),
  })
    .index("by_mpPaymentId", ["mpPaymentId"])
    .index("by_mpPreferenceId", ["mpPreferenceId"])
    .index("by_status", ["status"]),
});
