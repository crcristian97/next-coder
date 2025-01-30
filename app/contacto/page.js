'use client'
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
export default function Contacto() {
    const { registerUser, googleLogIn } = useContext(AuthContext);
    const router = useRouter();
    

    const submitForm = (e) => {
        e.preventDefault();
        const values = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        registerUser(values);
        router.push('/');
    }
    

    return (
        <main className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Contacto</h1>
            <form className="space-y-4" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name" className="block text-lg font-medium">Nombre:</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg font-medium">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-lg font-medium">Contraseña:</label>
                    <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black" />
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
            <div className="flex items-center p-2 rounded-md mt-4">
            
               
               
                <Image 
                    src="/imgoogle.png" 
                    alt="Google" 
                    width={100} 
                    height={100} 
                    className="object-contain"
                />
                <button 
                    onClick={googleLogIn}
                    className=" ml-4 text-white font-bold py-2 px-4 rounded"
                    aria-label="Ingresar con Google"
                >
                
                     Google
                </button>
            </div>
        </main>
    );
}