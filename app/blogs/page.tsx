import Link from "next/link";

export default function BlogsPage() {
    const publicaciones = [
        { id: "1", title: "Cuidados esenciales para mantener tus flores frescas", desc: "Aprende los mejores tips de hidratación y luz para arreglos florales." },
        { id: "2", title: "Cómo elegir el chocolate perfecto para cada ocasión", desc: "Descubre el maridaje de bombones con momentos especiales." }
    ];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
            <main className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">Blog de la Florería</h1>
                <div className="grid gap-6">
                    {publicaciones.map((post) => (
                        <div key={post.id} className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{post.title}</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-2">{post.desc}</p>
                            <Link href={`/blogs/${post.id}`} className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                Leer artículo completo →
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}