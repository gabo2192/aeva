import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Package } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full gradient-primary mb-8">
          <CheckCircle className="h-10 w-10 text-white" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          ¡Compra exitosa!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Tu pedido ha sido confirmado. Recibirás un correo con los detalles de
          tu compra y la información de envío.
        </p>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-5 mb-8">
          <div className="flex items-center gap-3 text-left">
            <Package className="h-5 w-5 text-emerald-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Envío en camino</p>
              <p className="text-xs text-muted-foreground">
                Tu pedido será despachado en las próximas 24-48 horas hábiles.
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
              ¿Necesitas ayuda?
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
