import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      {/* Contenedor del Logo con bordes suavizados */}
      <div className="mb-6 p-4 bg-white/5 border border-zinc-800 rounded-2xl shadow-xl backdrop-blur-sm">
        <Image
          src="/logom.jpg"
          alt="Margarita Florería Logo"
          width={280}
          height={280}
          priority
          className="rounded-xl object-contain mx-auto"
        />
      </div>

      {/* Encabezado y Bienvenida */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
        Margarita <span className="text-green-500">Florería</span>
      </h1>
      
      <p className="text-zinc-400 text-lg max-w-md mb-8">
        Flores frescas, arreglos especiales y detalles únicos para cada ocasión.
      </p>

      {/* Botones de Navegación Rápida */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/productos"
          className="bg-white hover:bg-zinc-200 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Ver Catálogo
        </Link>
        <Link
          href="/contacto"
          className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  );
}