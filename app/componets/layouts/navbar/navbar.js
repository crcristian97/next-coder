import Image from "next/image";
import Menu from "./menu";
export const metadata = {
  title: "Ecommerce Logo",
  description: "Ecommerce para empresa de ropa Zara",
  keywords: "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, Soluciones CRM Personalizadas",
}

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Image 
              src={'/logoApp.svg'}
              alt="Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
            <Menu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
