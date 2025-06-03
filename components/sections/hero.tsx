"use client";
import { CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Checkout from "./checkout";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className=" relative py-20 md:py-28 bg-gradient-to-b from-[#A1DEB0]/10 to-white ">
        <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-screen-xl mx-auto">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <Badge className="bg-[#A1DEB0]/80 text-foreground hover:bg-[#A1DEB0] px-3 py-1">
              Respira Mejor. Vive Mejor.
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Mejora Tu Respiración Natural con las Tiras Nasales AEVA
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
              Experimenta alivio inmediato y mejora tu flujo de aire con
              nuestras innovadoras tiras nasales sin medicamentos. AEVA está
              diseñada para abrir las fosas nasales de forma cómoda y efectiva,
              tanto de día como de noche, ayudándote a respirar mejor, dormir
              mejor y rendir más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" onClick={() => setOpen(true)}>
                Comprar Ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">Saber Más</Link>
              </Button>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                >
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt="Usuario"
                    width={32}
                    height={32}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium">
                4.9/5 de más de 2,000 reseñas
              </span>
            </div>
          </div> */}
          </div>
          <div className="flex-1 relative">
            <div className="relative h-[400px] w-[400px] mx-auto">
              <Image
                src="/aeva.png?height=400&width=400"
                alt="Tira Nasal AEVA"
                width={400}
                height={400}
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 bg-white rounded-lg shadow-lg p-4 hidden md:block">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">
                  Solución Sin Medicamentos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Checkout open={open} setOpen={setOpen} />
    </>
  );
}
