import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Florería",
  description: "Desarrollado por alumnos Duoc!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 p-4">
          <ul className="flex gap-6 justify-center font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ofertas">Ofertas</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/productos/flores">Flores</Link></li>
            <li><Link href="/nosotros">Nosotros</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}