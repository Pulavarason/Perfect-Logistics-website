import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientTicker from "@/components/ClientTicker"; 
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      
      <Hero />
      <About />
      <ClientTicker />
      <Services />
      <Contact />
    </>
  );
}
