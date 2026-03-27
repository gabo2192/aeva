import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createOrder = mutation({
  args: {
    quantity: v.number(),
    unitPrice: v.number(),
    totalAmount: v.number(),
    mpPreferenceId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      quantity: args.quantity,
      unitPrice: args.unitPrice,
      totalAmount: args.totalAmount,
      status: "pending",
      mpPreferenceId: args.mpPreferenceId,
      notifiedTelegram: false,
    });
    return orderId;
  },
});

export const updateOrderStatus = mutation({
  args: {
    mpPaymentId: v.string(),
    mpPreferenceId: v.optional(v.string()),
    status: v.union(
      v.literal("pending"),
      v.literal("approved"),
      v.literal("rejected"),
      v.literal("in_process"),
      v.literal("cancelled")
    ),
    mpStatus: v.optional(v.string()),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Try to find by preference ID first
    let order = null;
    if (args.mpPreferenceId) {
      order = await ctx.db
        .query("orders")
        .withIndex("by_mpPreferenceId", (q) =>
          q.eq("mpPreferenceId", args.mpPreferenceId)
        )
        .first();
    }

    if (!order) {
      // Create an order if webhook arrives before redirect
      const orderId = await ctx.db.insert("orders", {
        quantity: 1,
        unitPrice: 99,
        totalAmount: 99,
        status: args.status,
        mpPaymentId: args.mpPaymentId,
        mpStatus: args.mpStatus,
        customerEmail: args.customerEmail,
        customerName: args.customerName,
        notifiedTelegram: false,
      });
      return orderId;
    }

    await ctx.db.patch(order._id, {
      status: args.status,
      mpPaymentId: args.mpPaymentId,
      mpStatus: args.mpStatus,
      ...(args.customerEmail && { customerEmail: args.customerEmail }),
      ...(args.customerName && { customerName: args.customerName }),
    });

    return order._id;
  },
});

export const markTelegramNotified = mutation({
  args: {
    orderId: v.id("orders"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.orderId, { notifiedTelegram: true });
  },
});

export const getOrderByPreferenceId = query({
  args: { mpPreferenceId: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("orders")
      .withIndex("by_mpPreferenceId", (q) =>
        q.eq("mpPreferenceId", args.mpPreferenceId)
      )
      .first();
  },
});

export const getRecentOrders = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("orders").order("desc").take(50);
  },
});
