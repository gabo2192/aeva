"use client";

import { Button } from "@/components/ui/button";

import { useShoppingCart } from "@/context/shopping-cart-context";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ quantity }),
    });
    const data = await response.json();
    
    if (data.init_point) {
      window.location.href = data.init_point;
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <ShoppingCart />
          Comprar
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/aeva.png"
              alt="Aeva"
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="flex items-center flex-col gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">
                  Tira Nasal AEVA x 30 días
                </p>
                <p className="text-sm font-semibold text-foreground/70">
                  <span className="line-through">S/.{quantity * 185}.00</span>{" "}
                  S/.{quantity * 99}.00
                </p>
                <Select
                  value={quantity.toString()}
                  onValueChange={(value) => setQuantity(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Cantidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter className="border-t border-border">
          <div className="flex justify-between w-full">
            <p className="text-sm font-semibold">Subtotal</p>
            <p className="text-sm font-semibold">S/.{quantity * 99}.00</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-sm">Envio gratis</p>
          </div>
          <Button onClick={handleCheckout}>Comprar Ahora</Button>
          <Button variant="ghost" className="w-full underline">
            Continuar Comprando
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
