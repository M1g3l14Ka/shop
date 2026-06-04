
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">

      <Hero/>

      <Main/>
      
      <Footer/>

    </div>
  );
}
