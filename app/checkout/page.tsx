"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();

  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    region: "",
    comuna: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejador para simular un pago exitoso o con error
  const handleSimulatePayment = (isSuccess: boolean) => {
    if (isSuccess) {
      // Aquí podrías procesar los datos o llamar a tu API
      router.push("/checkout/exito");
    } else {
      router.push("/checkout/error");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          Finalizar Compra
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 text-zinc-800 dark:text-zinc-200">
            Información de Envío
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="p-2 border rounded-md bg-transparent text-zinc-900 dark:text-white"
              required
            />
            <input
              type="text"
              name="apellidos"
              placeholder="Apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="p-2 border rounded-md bg-transparent text-zinc-900 dark:text-white"
              required
            />
          </div>

          <input
            type="text"
            name="direccion"
            placeholder="Dirección / Calle y Número"
            value={formData.direccion}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-transparent text-zinc-900 dark:text-white"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="region"
              placeholder="Región"
              value={formData.region}
              onChange={handleChange}
              className="p-2 border rounded-md bg-transparent text-zinc-900 dark:text-white"
              required
            />
            <input
              type="text"
              name="comuna"
              placeholder="Comuna"
              value={formData.comuna}
              onChange={handleChange}
              className="p-2 border rounded-md bg-transparent text-zinc-900 dark:text-white"
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={() => handleSimulatePayment(true)}
              className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md transition cursor-pointer"
            >
              Simular Pago Exitoso
            </button>
            <button
              type="button"
              onClick={() => handleSimulatePayment(false)}
              className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md transition cursor-pointer"
            >
              Simular Error de Pago
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}