

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import { getProducts } from "@/data/products";
import { DummyJsonProducts } from "@/types/types"

export default async function Home() {

  const products: DummyJsonProducts[] = await getProducts();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#050505] overflow-x-hidden w-full text-white">

      <Hero/>

      <Main products={products}/>

      
      <Footer/>

    </div>
  );
}
