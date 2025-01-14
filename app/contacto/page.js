'use client'
import { useRouter } from "next/navigation";

export default function Contacto() {
    const router = useRouter();
    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium">Nombre:</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg font-medium">Mensaje:</label>
                    <textarea id="message" name="message" required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
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