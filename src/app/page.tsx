
import About from "@/components/about";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";
import Contact from "@/components/contactUs";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Contact/>
    </main>
  );
}
