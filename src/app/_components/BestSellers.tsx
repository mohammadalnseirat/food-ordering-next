import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { getBestSellers } from "@/server/db";




async function BestSellers() {
  const bestSellers = await getBestSellers(6);

  return (
    <section>
      <div className="container">
      <div className="mb-4 text-center">
        <MainHeading title="Our Best Sellers" subtitle="check out" />
      </div>
      <Menu items={bestSellers}/>
      </div>
    </section>
  );
}

export default BestSellers;
