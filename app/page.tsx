import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientTicker from "@/components/ClientTicker"; 
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <ClientTicker />
      <div id="services"><Services /></div>
      <Projects />
      <Gallery />
      <Reviews />
      <div id="contact"><Contact /></div>
    </>
  );
}