"use client";

import Logo from "@/assets/logo";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Checkout from "./checkout";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-emerald-500/10">
      <div className="max-w-screen-xl flex h-16 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="max-w-[100px]">
            <Logo />
          </span>
          <span className="sr-only">AEVA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-foreground/70 hover:text-emerald-600 transition-colors"
          >
            Beneficios
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-foreground/70 hover:text-emerald-600 transition-colors"
          >
            Cómo funciona
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-foreground/70 hover:text-emerald-600 transition-colors"
          >
            Preguntas frecuentes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden md:inline-flex text-foreground/70 hover:text-emerald-600"
            asChild
          >
            <a
              href="https://wa.link/lp497h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </Button>
          <Checkout />
          <button
            className="md:hidden p-2 text-foreground/70"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-500/10 px-4 py-4 space-y-3">
          <Link
            href="#features"
            className="block text-sm font-medium text-foreground/70 hover:text-emerald-600 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Beneficios
          </Link>
          <Link
            href="#how-it-works"
            className="block text-sm font-medium text-foreground/70 hover:text-emerald-600 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cómo funciona
          </Link>
          <Link
            href="#faq"
            className="block text-sm font-medium text-foreground/70 hover:text-emerald-600 py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Preguntas frecuentes
          </Link>
          <a
            href="https://wa.link/lp497h"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium text-foreground/70 hover:text-emerald-600 py-2"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
