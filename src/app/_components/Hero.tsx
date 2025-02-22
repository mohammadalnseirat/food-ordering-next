import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constant/enum";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        {/* Hero Left Side Content Start Here */}
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">Slice Into Happiness</h1>
          <p className="text-gray-500 my-5">
            Craving Pizza? We have got you covered with fresh intredients,
            endless flavor, and the fatest delivery, your perfect slice is just
            tap a way!
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "sm",
              })} flex gap-2 !rounded-full px-4 uppercase`}
            >
              Order Now
              <ArrowRightCircle className="!w-5 !h-5" />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-primary transition-colors duration-200"
            >
              Learn More
              <ArrowRightCircle className="!w-5 !h-5" />
            </Link>
          </div>
        </div>
        {/* Hero Left Side Content End Here */}
        {/* Hero Right Side Content Start Here */}
        <div className="relative">
          <Image
            src={"/assets/images/pizza.png"}
            alt="Pizza-Hero"
            fill
            loading="eager"
            priority
            className="object-contain"
          />
        </div>
        {/* Hero Right Side Content End Here */}
      </div>
    </section>
  );
}

export default Hero;
