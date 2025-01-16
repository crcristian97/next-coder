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
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Productos</h1>
            <div className="flex justify-center mt-8 space-x-4">
                <select 
                    className="bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-50 transition duration-200"
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
                    className="bg-blue-500 text-white font-bold py-2 px-6 rounded shadow-md hover:bg-blue-600 transition duration-200"
                >
                    Filtrar
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                {filterProducts.map(({ id = '', title = '', price = 0 }) => (
                    <div key={id} className="border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-200">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-lg font-bold text-gray-800">${price}</p>
                        <button 
                            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-200"
                            aria-label="Agregar al carrito"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}