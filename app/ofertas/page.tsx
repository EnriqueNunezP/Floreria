"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Oferta {
  id: string | number;
  titulo: string;
  descuento: string;
  codigo: string;
}

export default function OfertasPage() {
  const [ofertas, setOfertas] = useState<Oferta[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/offers")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setOfertas(data);
        }
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar las ofertas:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center font-sans">
        <p className="text-zinc-400 text-lg">Cargando ofertas exclusivas...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">
            Ofertas y <span className="text-emerald-500">Promociones</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Aprovecha nuestros cupones de descuento en flores y detalles especiales.
          </p>
        </div>

        {ofertas.length === 0 ? (
          <div className="text-center py-16 bg-zinc-950 border border-zinc-800 rounded-xl">
            <p className="text-zinc-400 text-lg mb-4">
              Por el momento no hay ofertas activas disponibles.
            </p>
            <Link
              href="/productos"
              className="inline-block bg-white text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-zinc-200 transition"
            >
              Ver todos los productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ofertas.map((of) => (
              <div
                key={of.id}
                className="bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl p-6 flex flex-col justify-between transition shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-xs uppercase px-3 py-1 rounded-full">
                      Descuento del {of.descuento}
                    </span>
                    <span className="text-2xl">🏷️</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {of.titulo}
                  </h2>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 uppercase tracking-wider">
                    Código Cupón
                  </span>
                  <span className="font-mono bg-zinc-800 border border-zinc-700 text-emerald-400 font-bold px-3 py-1.5 rounded text-sm tracking-wide">
                    {of.codigo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}