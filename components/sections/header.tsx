import Logo from "@/assets/logo";
import Link from "next/link";
import { Button } from "../ui/button";
import Checkout from "./checkout";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="max-w-[100px]">
            <Logo />
          </span>
          <span className="sr-only">AEVA</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-sky-500 transition-colors"
          >
            Características
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-sky-500 transition-colors"
          >
            Cómo funciona
          </Link>

          <Link
            href="#faq"
            className="text-sm font-medium hover:text-sky-500 transition-colors"
          >
            Preguntas frecuentes
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Contáctanos
          </Button>
          <Checkout />
        </div>
      </div>
    </header>
  );
}
