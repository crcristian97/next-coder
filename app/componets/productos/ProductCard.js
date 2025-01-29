import Link from "next/link"
const ProductCard = ({ item }) => {
    const { title, price, image, description, slug } = item
    return (
        <article className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img 
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
                <h3 className="text-xl font-bold text-white hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-gray-600 text-base text-white">{description}</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">${price}</p>
                <button  className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors">
                    Ver Detalles
                </button>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors">
                    Agregar al carrito
                </button>
            </div>
        </article>
    )
}

export default ProductCard