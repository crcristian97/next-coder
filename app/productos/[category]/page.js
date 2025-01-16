import { productos } from "../../mock/productos";
import ButtonBack from "../../componets/common/button/buttonBack";

export const metadata = {
    title: "Ecommerce | Home",
    description: "Ecommerce con los productos de la categoria camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
    keywords: "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
};

export default function CategoryPage({ params }) {
    const { category } = params;
    const filteredProducts = productos.filter(producto => producto.category === category);
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">{category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(producto => (
                    <div key={producto.id} className="border rounded-lg p-4 shadow-md">
                        <h2 className="text-xl font-semibold">{producto.title}</h2>
                    </div>
                ))}
            </div>
            <ButtonBack />
        </div>
    );
}