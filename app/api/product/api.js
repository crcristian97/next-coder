export const fetchProducts = async (categoria) => {
    const response = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error(`Error fetching products: ${response.statusText}`);
    }

    return response.json();
};
