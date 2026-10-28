interface Props {
    params: Promise<{ id: string }>;
}

export default async function BlogDetallePage({ params }: Props) {
    const { id } = await params;
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
            <main className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-lg border border-zinc-200 dark:border-zinc-800">
                <h1 className="text-3xl font-bold mb-4 text-zinc-900 dark:text-white">Artículo # {id}</h1>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Este es el detalle del artículo seleccionado del blog. Aquí se incluye todo el contenido informativo respecto al cuidado de plantas, ramos especiales o selección de bombones artesanales.
                </p>
            </main>
        </div>
    );
}