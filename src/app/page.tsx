
import About from "@/components/about";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
    </main>
  );
}
