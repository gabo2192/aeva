export function sendTelegramNotification(
  botToken: string,
  chatId: string,
  message: string
): Promise<Response> {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
    }),
  });
}

export function formatOrderNotification(order: {
  quantity: number;
  totalAmount: number;
  status: string;
  customerName?: string;
  customerEmail?: string;
  mpPaymentId?: string;
}): string {
  const statusEmoji: Record<string, string> = {
    approved: "✅",
    pending: "⏳",
    rejected: "❌",
    in_process: "🔄",
    cancelled: "🚫",
  };

  const emoji = statusEmoji[order.status] || "📦";

  return [
    `${emoji} <b>Nueva orden — ${order.status.toUpperCase()}</b>`,
    ``,
    `📦 Cantidad: ${order.quantity}`,
    `💰 Total: S/.${order.totalAmount}.00`,
    order.customerName ? `👤 Cliente: ${order.customerName}` : null,
    order.customerEmail ? `📧 Email: ${order.customerEmail}` : null,
    order.mpPaymentId ? `🔗 MP Payment: ${order.mpPaymentId}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
