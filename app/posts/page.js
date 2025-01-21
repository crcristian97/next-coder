import { Suspense } from 'react';
import Link from 'next/link';

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
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

export const generateStaticParams = async () => {
    return[
        {
            userI: 1,
            id: 1,
        },
        {
            userI: 1,
            id: 2,
        }   
    ] 
};


const Posts =  async () => {
    const data = await getPosts();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <h1>Posts</h1>
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Suspense>
    )
}

export default Posts;