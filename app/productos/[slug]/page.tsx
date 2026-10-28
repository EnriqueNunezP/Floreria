import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Producto({ params }: PageProps) {
    const { slug } = await params;
    const url_base = "http://localhost:4000/products/";
    const url = url_base + slug;
    
    const response = await fetch(url, { cache: "no-store" });
    
    if (!response.ok) {
        notFound();
    }

    const producto = await response.json(); 
    
    if (!producto || !producto.id){
        notFound();
    }

    return (
        <div className="p-8 font-sans">
            <h1 className="text-2xl font-bold mb-2">Detalle del producto</h1>
            <p className="text-lg">
                El producto es <br />
                <span className="font-semibold">{producto.name}</span> -- ${producto.price}
            </p>
        </div>
    );
}