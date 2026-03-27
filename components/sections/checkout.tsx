"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "@/context/shopping-cart-context";
import {
  AlertCircle,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Loader2,
  Package,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
  const [stock, setStock] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const unitPrice = 69;
  const originalPrice = 185;
  const discount = Math.round(
    ((originalPrice - unitPrice) / originalPrice) * 100
  );

  const fetchStock = useCallback(async () => {
    try {
      const res = await fetch("/api/stock");
      const data = await res.json();
      setStock(data.stock);
    } catch {
      // Stock check is non-blocking
    }
  }, []);

  useEffect(() => {
    fetchStock();
  }, [fetchStock]);

  const outOfStock = stock !== null && stock <= 0;
  const lowStock = stock !== null && stock > 0 && stock <= 10;
  const maxQuantity = stock !== null ? Math.min(5, stock) : 5;

  const handleCheckout = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Error al procesar tu compra");
        if (data.availableStock !== undefined) {
          setStock(data.availableStock);
          if (quantity > data.availableStock) {
            setQuantity(Math.max(1, data.availableStock));
          }
        }
        setLoading(false);
        return;
      }

      if (data.init_point) {
        window.location.href = data.init_point;
      }
    } catch {
      setError("Error de conexión. Intenta de nuevo.");
      setLoading(false);
    }
  };

  return (
    <Sheet
      onOpenChange={(open) => {
        if (open) fetchStock();
      }}
    >
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

            {/* Stock indicator */}
            {stock !== null && (
              <div className="mt-3">
                {outOfStock ? (
                  <div className="flex items-center gap-2 text-xs text-red-600 font-medium">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Agotado
                  </div>
                ) : lowStock ? (
                  <div className="flex items-center gap-2 text-xs text-amber-600 font-medium">
                    <Package className="h-3.5 w-3.5" />
                    Quedan pocas unidades ({stock})
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
                    <Check className="h-3.5 w-3.5" />
                    En stock
                  </div>
                )}
              </div>
            )}

            {/* Quantity selector */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-emerald-500/10">
              <span className="text-sm text-muted-foreground">Cantidad</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-40"
                  disabled={quantity <= 1 || outOfStock}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-semibold w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(maxQuantity, quantity + 1))
                  }
                  className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:bg-emerald-50 transition-colors disabled:opacity-40"
                  disabled={quantity >= maxQuantity || outOfStock}
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
          {/* Error message */}
          {error && (
            <div className="w-full flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-lg p-3 mb-2">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          )}

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
            disabled={loading || outOfStock}
            className="w-full h-12 gradient-primary text-white border-0 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:opacity-95 transition-all text-base font-semibold disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Procesando...
              </>
            ) : outOfStock ? (
              <>Agotado</>
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
