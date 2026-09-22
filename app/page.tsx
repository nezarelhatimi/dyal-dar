import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}