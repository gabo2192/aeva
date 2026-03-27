import { Sparkles, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Checkout from "./checkout";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-32 px-4 md:px-6"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-primary-soft" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-400/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-400/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">
              Respira Mejor. Vive Mejor.
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Respiración natural,{" "}
            <span className="gradient-text">potenciada</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[540px] mx-auto md:mx-0 leading-relaxed">
            Tiras nasales innovadoras que abren tus vías respiratorias al
            instante. Sin medicamentos. Cómodas todo el día y toda la noche.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Checkout />
            <Button
              size="lg"
              variant="outline"
              className="border-emerald-500/30 text-foreground hover:bg-emerald-50 hover:border-emerald-500/50"
              asChild
            >
              <Link href="#how-it-works">Descubre cómo funciona</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 justify-center md:justify-start pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-emerald-500" />
              <span>Sin medicamentos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-emerald-500" />
              <span>Efecto inmediato</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-full max-w-[420px] mx-auto">
            {/* Glow behind product */}
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full scale-75" />
            <Image
              src="/aeva.png"
              alt="Tira Nasal AEVA"
              width={420}
              height={420}
              className="relative object-contain w-full h-full drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-2 left-4 md:left-0 bg-white rounded-2xl shadow-xl shadow-emerald-500/10 p-4 border border-emerald-500/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">+30% flujo de aire</p>
                <p className="text-xs text-muted-foreground">
                  Resultados inmediatos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
