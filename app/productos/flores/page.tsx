"use client";

import { useEffect, useState } from "react";

interface ProductoType {
  id: string | number;
  nombre?: string;
  name?: string;
  categoria?: string;
  category?: string;
  image?: string;
  descripcion?: string;
}

export default function FloresPage() {
  const [flores, setFlores] = useState<ProductoType[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filtrar únicamente los productos de la categoría "Flores"
          const listaFlores = data.filter(
            (item) => (item.category || item.categoria || "").toLowerCase() === "flores"
          );
          setFlores(listaFlores);
        }
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al obtener las flores:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center font-sans">
        <p className="text-zinc-400 text-lg">Cargando flores...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Nuestras <span className="text-emerald-500">Flores</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Catálogo exclusivo de flores frescas y arreglos florales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flores.map((flor) => {
            const titulo = flor.nombre || flor.name || "Flor";
            const imagenUrl =
              flor.image || "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80";
            const descripcion =
              flor.descripcion ||
              "Hermosa flor de la mejor calidad para regalar en cualquier momento especial.";

            return (
              <div
                key={flor.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="h-56 w-full bg-zinc-800 overflow-hidden">
                    <img
                      src={imagenUrl}
                      alt={titulo}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
                      Flores
                    </span>
                    <h2 className="text-xl font-bold text-white mt-1 mb-2">{titulo}</h2>
                    <p className="text-sm text-zinc-400 line-clamp-3">
                      {descripcion}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}