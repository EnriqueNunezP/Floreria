import Link from "next/link";

export default function PagoExitosoPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4 font-sans">
            <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-green-500 rounded-lg p-6 text-center shadow-lg">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✓</div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">¡Compra Realizada con Éxito!</h1>
                <p className="text-zinc-500 mb-4">Código de Orden: <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">#20261026</span></p>
                <Link href="/productos" className="inline-block bg-zinc-900 dark:bg-white dark:text-black text-white px-6 py-2 rounded-md font-medium">
                    Volver a Productos
                </Link>
            </div>
        </div>
    );
}