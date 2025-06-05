import { MercadoPagoConfig, Preference } from "mercadopago";

export const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_API_KEY || "",
});

export const preference = new Preference(client);

