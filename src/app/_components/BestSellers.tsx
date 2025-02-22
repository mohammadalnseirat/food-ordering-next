import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { formatCurrency } from "@/lib/formatts";
import Image from "next/image";

function BestSellers() {
  //! Dummy Data Array:
  const bestSellers = [
    {
      id:crypto.randomUUID(),
      name:'Pizza One',
      description:'This is a pizza',
      basePrice:10,
      image:'/assets/pizza-2.jpg'
    },
    {
      id:crypto.randomUUID(),
      name:'Pizza Two',
      description:'This is a pizza',
      basePrice:10,
      image:'/assets/pizza-3.png'
    },
    {
      id:crypto.randomUUID(),
      name:'Pizza Three',
      description:'This is a pizza',
      basePrice:10,
      image:'/assets/pizza-4.jpg'
    },
    {
      id:crypto.randomUUID(),
      name:'Pizza Four',
      description:'This is a pizza',
      basePrice:10,
      image:'/assets/pizza.png'
    }
  ]
  
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
