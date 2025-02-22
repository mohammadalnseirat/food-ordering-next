import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { db } from "@/lib/prisma";


async function BestSellers() {
  const bestSellers = await db.product.findMany({
    include:{
      sizes:true,
      extras:true,
    }
  })

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
