import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Growth } from "@/components/Growth";
import { Capabilities } from "@/components/Capabilities";
import { Plants } from "@/components/Plants";
import { Products } from "@/components/Products";
import { Customers } from "@/components/Customers";
import { Certifications } from "@/components/Certifications";
import { GlobalPresence } from "@/components/GlobalPresence";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Growth />
        <Capabilities />
        <Plants />
        <Products />
        <Certifications />
        <GlobalPresence />
        <Customers />
      </main>
      <Footer />
    </>
  );
}
