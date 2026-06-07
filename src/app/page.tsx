
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import { Product } from "@/data/products";

export default async function Home() {

  const products = await Product();

  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <Hero/>

      <Main products={products}/>
      
      <Footer/>

    </div>
  );
}
