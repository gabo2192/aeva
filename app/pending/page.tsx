import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function PendingPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-amber-100 mb-8">
          <Clock className="h-10 w-10 text-amber-500" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Pago pendiente
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Tu pago está siendo procesado. Te notificaremos por correo
          electrónico cuando se confirme. Esto puede tomar unos minutos.
        </p>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-50/50 p-5 mb-8">
          <div className="flex items-center gap-3 text-left">
            <Clock className="h-5 w-5 text-amber-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Procesando pago</p>
              <p className="text-xs text-muted-foreground">
                Recibirás una confirmación por correo cuando el pago sea
                aprobado.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="gradient-primary text-white border-0 shadow-lg shadow-emerald-500/25"
            asChild
          >
            <Link href="/">
              Volver al inicio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://wa.link/lp497h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Consultar estado
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
