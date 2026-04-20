import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rebeka Restaurant",
  description: "Restaurante mediterráneo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f5f1ea]">
        
        {/* MENÚ QUE SALE SIEMPRE ARRIBA */}
        <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-[#F5F1EA]/50 px-8 py-1 text-white backdrop-blur-sm md:px-16 lg:px-24">
          
          {/* LOGO */}
          <Link
            href="/"
            className={`${cormorant.className} text-3xl font-semibold tracking-wide`}
          >
            REBEKA
          </Link>

          {/* ENLACES */}
          <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            <Link href="/">Inicio</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/sobre-nosotros">Sobre nosotros</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </nav>

        {/* CONTENIDO DE CADA PÁGINA */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}