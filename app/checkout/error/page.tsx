import Link from "next/link";

export default function PagoErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-4 font-sans">
            <div className="max-w-md w-full bg-white dark:bg-zinc-900 border border-red-500 rounded-lg p-6 text-center shadow-lg">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">✕</div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">No se pudo realizar el pago</h1>
                <p className="text-zinc-500 mb-6">Hubo un problema al procesar la transacción. Por favor, intenta de nuevo.</p>
                <Link href="/checkout" className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition">
                    Volver a intentar
                </Link>
            </div>
        </div>
    );
}