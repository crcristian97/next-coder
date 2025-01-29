import Navbar from "./componets/layouts/navbar/navbar";
import Footer from "./componets/layouts/footer/footer";

//De forma estatica

export const metadata = {
  title: "Ecommerce | Home",
  description: "Ecommerce para empresa de ropa Zara",
  keywords: "Ecommerce, ropa, Zara, moda, tienda, online, shopping, tienda de ropa, Soluciones CRM Personalizadas",
  openGraph: {
    title: "Ecommerce | Home",
    description: "Ecommerce para empresa de ropa Zara",
    url: "https://ecommerce.zarra.com",
    siteName: "Ecommerce",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
};

//De forma dinámica
//Cuando avancemos usaremos firebase
/*
export async function generateMetadata( {params, searchParams }, parent) {
  const { id } = params;
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()); //CUANDO AVANCEMOS USAMOS FIREBASE
  const parentMetadata = await parent;
  return {
    title: `Ecommerce | ${product.title}`,
    description: product.description,
    openGraph: {
      title: `Ecommerce | ${product.title}`,
      description: product.description,
      url: `https://ecommerce.zarra.com/product/${id}`,
      siteName: "Ecommerce",
      images: [
        {
          url: product.image,
          alt: product.title,
          title: product.title,
          width: 1200,
          height: 630,
        },
      ],
    },
    ...parentMetadata,
  };
}
*/


export default function Home() {
  
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
 