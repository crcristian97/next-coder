"use client"
import { useRouter } from "next/navigation";

const ButtonBack = () => {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()} 
            className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            aria-label="Regresar"
        >
            Regresar
        </button>
    );
};

export default ButtonBack;
