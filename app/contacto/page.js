'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contacto() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const response = await fetch(`http://localhost:3000/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-store',
            body: JSON.stringify({ name, email, message })
        });
        const data = await response.json();
        console.log(data);
    }

    const router = useRouter();
    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-lg font-medium">Nombre:</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-medium">Mensaje:</label>
                    <textarea id="message" name="message" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
                </div>
                <button 
                    type="submit" 
                    className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
                    aria-label="Enviar"
                >
                    Enviar
                </button>
                <button 
                    onClick={() => router.back()}
                    className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded"
                    aria-label="Volver"
                >
                    Volver
                </button>
            </form>
        </main>
    );
}