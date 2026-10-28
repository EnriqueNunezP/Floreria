"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [totalProductos, setTotalProductos] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTotalProductos(data.length);
        }
      })
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-zinc-950 font-sans text-zinc-800 dark:text-zinc-100">
      {/* Sidebar Lateral */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between p-4">
        <div>
          <div className="font-bold text-lg mb-6 px-3 text-zinc-900 dark:text-white">
            Margarita Admin
          </div>
          <nav className="space-y-1 text-sm">
            <a
              href="#dashboard"
              className="flex items-center gap-3 px-3 py-2 bg-blue-600 text-white font-medium rounded-lg"
            >
              📊 Dashboard
            </a>
            <a
              href="#ordenes"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              🛒 Órdenes
            </a>
            <a
              href="#productos"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              📦 Productos
            </a>
            <a
              href="#ofertas"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              🏷️ Ofertas
            </a>
            <a
              href="#categorias"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              📑 Categorías
            </a>
            <a
              href="#usuarios"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              👥 Usuarios
            </a>
            <a
              href="#reportes"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition"
            >
              📈 Reportes
            </a>
            <a
              href="#perfil"
              className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 transition mt-4"
            >
              👤 Perfil
            </a>
          </nav>
        </div>

        {/* Botones inferiores */}
        <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/productos"
            className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg text-sm font-semibold transition"
          >
            🏪 Tienda
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition"
          >
            🚪 Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
        <p className="text-xs text-zinc-500 mb-6">Resumen de las actividades diarias</p>

        {/* Tarjetas Superiores Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-blue-600 text-white rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Compras</h3>
                <span className="text-2xl">🛒</span>
              </div>
              <p className="text-3xl font-bold mt-2">1,234</p>
            </div>
            <p className="text-xs mt-4 text-blue-100">Probabilidad de aumento: <strong>20%</strong></p>
          </div>

          <div className="p-6 bg-emerald-600 text-white rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Productos</h3>
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-3xl font-bold mt-2">{totalProductos}</p>
            </div>
            <p className="text-xs mt-4 text-emerald-100">Inventario actual: <strong>500</strong></p>
          </div>

          <div className="p-6 bg-amber-500 text-white rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Usuarios</h3>
                <span className="text-2xl">👥</span>
              </div>
              <p className="text-3xl font-bold mt-2">890</p>
            </div>
            <p className="text-xs mt-4 text-amber-100">Nuevos usuarios este mes: <strong>120</strong></p>
          </div>
        </div>

        {/* Módulos de Gestión */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">⏱️</span>
            <h4 className="font-bold text-base mb-1">Dashboard</h4>
            <p className="text-xs text-zinc-500">Visión general de todas las métricas del sistema.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">🛒</span>
            <h4 className="font-bold text-base mb-1">Órdenes</h4>
            <p className="text-xs text-zinc-500">Gestión y seguimiento de órdenes de compra.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">📦</span>
            <h4 className="font-bold text-base mb-1">Productos</h4>
            <p className="text-xs text-zinc-500">Administrar inventario y detalles de productos.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm border-emerald-500/50">
            <span className="text-3xl block mb-2">🏷️</span>
            <h4 className="font-bold text-base mb-1">Ofertas y Descuentos</h4>
            <p className="text-xs text-zinc-500">Crear promociones y descuentos especiales en arreglos y flores.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">📑</span>
            <h4 className="font-bold text-base mb-1">Categorías</h4>
            <p className="text-xs text-zinc-500">Organizar productos en categorías para la navegación.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">👥</span>
            <h4 className="font-bold text-base mb-1">Usuarios</h4>
            <p className="text-xs text-zinc-500">Gestión de cuentas de usuarios y sus roles.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">📈</span>
            <h4 className="font-bold text-base mb-1">Reportes</h4>
            <p className="text-xs text-zinc-500">Generación de informes detallados sobre operaciones.</p>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-center shadow-sm">
            <span className="text-3xl block mb-2">🏪</span>
            <h4 className="font-bold text-base mb-1">Tienda</h4>
            <p className="text-xs text-zinc-500">Visualiza tu tienda en tiempo real y reportes de clientes.</p>
          </div>
        </div>
      </main>
    </div>
  );
}