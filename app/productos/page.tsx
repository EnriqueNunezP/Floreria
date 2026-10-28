"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductoType {
  id: string | number;
  nombre?: string;
  title?: string;
  name?: string;
  categoria?: string;
  category?: string;
  precio?: number;
  price?: number;
  image?: string;
}

export default function ProductosPage() {
  const router = useRouter();
  const [productos, setProductos] = useState<ProductoType[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (prod: ProductoType) => {
    const titulo = prod.nombre || prod.title || prod.name || "Producto sin nombre";
    const precio = Number(prod.precio ?? prod.price ?? 0);

    const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existe = carritoGuardado.find((item: any) => String(item.id) === String(prod.id));

    let nuevoCarrito;
    if (existe) {
      nuevoCarrito = carritoGuardado.map((item: any) =>
        String(item.id) === String(prod.id)
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [
        ...carritoGuardado,
        { id: prod.id, nombre: titulo, precio: precio, cantidad: 1 },
      ];
    }

    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    window.dispatchEvent(new Event("carritoActualizado"));
    router.push("/carrito");
  };

  if (cargando) {
    return (
      <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
        <p className="text-zinc-400 text-lg">Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Catálogo de Productos</h1>
        <p className="text-zinc-400 mb-8">
          Hay {productos.length} productos disponibles en la florería.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((prod) => {
            const titulo = prod.nombre || prod.title || prod.name || "Producto sin nombre";
            const precio = Number(prod.precio ?? prod.price ?? 0);
            const categoria = prod.categoria || prod.category || "General";
            const imagenUrl = prod.image || "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80";

            return (
              <div
                key={prod.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="h-48 w-full bg-zinc-800 rounded-md overflow-hidden mb-4">
                    <img
                      src={imagenUrl}
                      alt={titulo}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <span className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
                    {categoria}
                  </span>
                  <h2 className="text-lg font-bold text-white mt-1 mb-2">{titulo}</h2>
                  <p className="text-green-500 font-bold text-xl mb-4">${precio}</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => agregarAlCarrito(prod)}
                    type="button"
                    className="w-full bg-white hover:bg-zinc-200 text-black text-sm font-semibold py-2 rounded-md transition"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}