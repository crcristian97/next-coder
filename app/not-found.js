'use client'
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl mt-4">Página no encontrada</p>
            <button onClick={() => router.back()} className="mt-6 text-blue-500 hover:underline">
                Regresar a la página principal
            </button>
        </div>
    );
};

export default NotFoundPage;
