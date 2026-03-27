import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import { ConvexClientProvider } from "@/lib/convex";
import { ShoppingCartProvider } from "@/context/shopping-cart-context";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEVA - Respira Mejor, Vive Mejor",
  description:
    "Tiras nasales innovadoras que mejoran tu respiración de forma natural. Sin medicamentos, cómodas y efectivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <ShoppingCartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </ShoppingCartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
