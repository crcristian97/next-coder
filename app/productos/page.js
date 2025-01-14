'use client'
import { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import { useRouter } from "next/navigation";

export default function Productos() {
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const router = useRouter();

    useEffect(() => {
        setFilterProducts(productos);
    }, []);

    const handleFilter = () => {
        router.push(`/productos/${selectedCategory}`);
    };

    return (
        <main className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Productos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filterProducts.map( ({id = '', title = '', price = 0}) => (
                    <div key={id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="text-lg font-bold">${price}</p>
                        <button 
                            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                            aria-label="Agregar al carrito"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <select 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Selecciona una categoría</option>
                    {Array.from(new Set(productos.map(producto => producto.category))).map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                <button 
                    onClick={handleFilter} 
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Filtrar
                </button>
            </div>
        </main>
    );
}