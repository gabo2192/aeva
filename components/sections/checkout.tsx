"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/shopping-cart-context";
import {
  Check,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export default function Checkout() {
  const { quantity, setQuantity } = useShoppingCart();
  const [loading, setLoading] = useState(false);

  const unitPrice = 99;
  const originalPrice = 185;
  const discount = Math.round(((originalPrice - unitPrice) / originalPrice) * 100);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();

      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="gradient-primary text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:opacity-95 transition-all">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Comprar
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="pb-4">
          <SheetTitle className="text-xl">Tu carrito</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Product card */}
          <div className="mx-4 rounded-2xl border border-emerald-500/10 bg-emerald-50/30 p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/aeva.png"
                  alt="AEVA"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm leading-tight">
                  Tira Nasal AEVA
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Pack 30 días
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-emerald-600">
                    S/.{unitPrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    S/.{originalPrice}
                  </span>
                  <span className="text-xs font-semibold text-white bg-emerald-500 px-2 py-0.5 rounded-full">
                    -{discount}%
                  </span>
                </div>
              </div>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-emerald-500/10">
              <span className="text-sm text-muted-foreground">Cantidad</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-semibold w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(5, quantity + 1))}
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-40"
                  disabled={quantity >= 5}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mx-4 mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>Envío gratis a todo el Perú</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>Pago seguro con Mercado Pago</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>Garantía de satisfacción</span>
            </div>
          </div>
        </div>

        <SheetFooter className="border-t border-border pt-4 mt-auto">
          {/* Price breakdown */}
          <div className="w-full space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Subtotal ({quantity} {quantity === 1 ? "unidad" : "unidades"})
              </span>
              <span>S/.{quantity * unitPrice}.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Envío</span>
              <span className="text-emerald-600 font-medium">Gratis</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Ahorras</span>
              <span className="text-emerald-600 font-medium">
                -S/.{quantity * (originalPrice - unitPrice)}.00
              </span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>S/.{quantity * unitPrice}.00</span>
            </div>
          </div>

          <Button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full h-12 gradient-primary text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:opacity-95 transition-all text-base font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Procesando...
              </>
            ) : (
              <>Pagar con Mercado Pago</>
            )}
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2">
            Serás redirigido a Mercado Pago para completar tu compra de forma
            segura
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
