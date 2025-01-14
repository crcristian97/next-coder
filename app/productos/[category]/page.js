import { productos } from "../../mock/productos";

export const metadata = {
    title: "Ecommerce | Home",
    description: "Ecommerce con los productos de la categoria camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
    keywords: "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, camisa, pantalon, chaqueta, sudadera, camiseta, zapato, etc.",
  };

export default function CategoryPage({ params }) {
    const { category } = params;
    const filteredProducts = productos.filter(producto => producto.category === category);
    return (
        <div>
            <h1>{category}</h1>
            {filteredProducts.map(producto => <div key={producto.id}>{producto.title}</div>)}
        </div>
    );
}