"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

export default function Checkout({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Finaliza tu Compra</DialogTitle>
          <DialogDescription>
            Tiras Nasales AEVA – S/.99 (envío incluido)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4 text-sm">
          <div>
            <strong>💳 Pagar con tarjeta:</strong>
            <br />
            <a
              href="https://buy.stripe.com/tu-link-de-checkout"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a pago seguro con Stripe
            </a>
          </div>

          <div>
            <strong>📲 Yape o Plin:</strong>
            <br />
            Envía S/.99 al número{" "}
            <span className="font-semibold">+51 999 999 999</span>
            <br />
            Luego envía el comprobante por WhatsApp.
            <div className="mt-2">
              <img src="/qr-yape.png" alt="QR Yape" className="w-32 rounded" />
            </div>
          </div>

          <div className="text-xs text-muted-foreground pt-2 border-t mt-4">
            Envíos en 24–48h a todo el Perú • Compra segura 🔒
          </div>
        </div>

        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
