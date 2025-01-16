import Link from 'next/link';

const getPosts = async () => {
    const res = await fetch('https://fastapiproject-1-eziw.onrender.com/blue', 
        {
           // cache: 'force-cache' // basada en tiempo
            cache: 'no-store', // basada en peticion
            next: {
                revalidate: 10 // Tiempo en milisengundos
            }
        }
    );
    
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

const Posts =  async () => {
    const data = await getPosts();
    console.log(data);
    return (
        <div>
            <h1>Posts</h1>
                <ul>
                    <li>Currency: {data.currency}</li>
                    <li>Compra: {data.compra}</li>
                    <li>Venta: {data.venta}</li>
                </ul>
        </div>
    )
}

export default Posts;