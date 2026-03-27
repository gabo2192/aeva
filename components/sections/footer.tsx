import Logo from "@/assets/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2 mb-4 w-28 text-background">
              <Logo />
            </div>
            <p className="text-sm text-background/50 leading-relaxed">
              Mejorando tu respiración de forma natural. Tiras nasales
              innovadoras diseñadas en Perú.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold mb-4 text-background/70">
                Producto
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#features"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-background/70">
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://wa.link/lp497h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-background/50 hover:text-background transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} AEVA. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
