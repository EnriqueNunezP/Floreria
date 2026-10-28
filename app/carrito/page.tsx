"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ItemCarrito {
  id: string | number;
  nombre: string;
  precio: number;
  cantidad: number;
  image?: string;
}

export default function CarritoPage() {
  const router = useRouter();
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  const cargarCarrito = () => {
    const items = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCarrito(items);
  };

  useEffect(() => {
    cargarCarrito();
  }, []);

  const eliminarItem = (id: string | number) => {
    const nuevoCarrito = carrito.filter((item) => String(item.id) !== String(id));
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    window.dispatchEvent(new Event("carritoActualizado"));
  };

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.precio) * Number(item.cantidad),
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Carrito de Compras</h1>

        {carrito.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
            <p className="text-zinc-400 text-lg mb-4">Tu carrito está vacío.</p>
            <Link
              href="/productos"
              className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-zinc-200 transition"
            >
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400 text-sm">
                    <th className="py-3 px-2">Imagen</th>
                    <th className="py-3 px-2">Nombre</th>
                    <th className="py-3 px-2">Precio</th>
                    <th className="py-3 px-2">Cantidad</th>
                    <th className="py-3 px-2">Subtotal</th>
                    <th className="py-3 px-2 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {carrito.map((item) => (
                    <tr key={item.id} className="text-sm">
                      <td className="py-4 px-2">
                        <div className="w-12 h-12 bg-zinc-800 rounded overflow-hidden">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.nombre}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-zinc-500">
                              Foto
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-2 font-semibold text-white">{item.nombre}</td>
                      <td className="py-4 px-2 text-zinc-300">${item.precio}</td>
                      <td className="py-4 px-2 font-bold">{item.cantidad}</td>
                      <td className="py-4 px-2 font-bold text-white">
                        ${item.precio * item.cantidad}
                      </td>
                      <td className="py-4 px-2 text-right">
                        <button
                          onClick={() => eliminarItem(item.id)}
                          type="button"
                          className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded transition"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/productos"
                className="text-zinc-400 hover:text-white text-sm transition"
              >
                ← Seguir Comprando
              </Link>

              <div className="flex items-center gap-6">
                <span className="text-lg">
                  Total: <strong className="text-2xl text-white">${total}</strong>
                </span>
                <button
                  onClick={() => router.push("/checkout")}
                  type="button"
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-3 rounded-lg transition"
                >
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}