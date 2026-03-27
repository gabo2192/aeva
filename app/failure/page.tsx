import { Button } from "@/components/ui/button";
import { XCircle, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function FailurePage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-red-100 mb-8">
          <XCircle className="h-10 w-10 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Pago no completado
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Hubo un problema al procesar tu pago. No se realizó ningún cargo a tu
          cuenta. Puedes intentar nuevamente.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="gradient-primary text-white border-0 shadow-lg shadow-emerald-500/25"
            asChild
          >
            <Link href="/">
              <RefreshCw className="mr-2 h-4 w-4" />
              Intentar de nuevo
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://wa.link/lp497h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar soporte
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
