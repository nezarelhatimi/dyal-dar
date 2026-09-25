import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/AboutContact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AboutContact from "@/components/sections/AboutContact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      
      <AboutContact />
      
      <Footer />
      <WhatsAppButton />
    </main>
  );
}