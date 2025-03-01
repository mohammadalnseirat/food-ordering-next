import { Routes } from "@/constant/enum";
import React from "react";
import MainHeading from "../main-heading";

function About() {
  const ListDescriptions = [
    {
      id: crypto.randomUUID(),
      description:
        "Diverse Choices – Browse menus from top restaurants, local favorites, and hidden gems in your area.",
      icon: "🍽",
    },
    {
      id: crypto.randomUUID(),
      description:
        "Seamless Ordering – Place orders with just a few clicks, no phone calls or long wait times.",
      icon: "⚡",
    },
    {
      id: crypto.randomUUID(),
      description:
        "Fast & Reliable Delivery – Enjoy hot, fresh meals delivered straight to your door.",
      icon: "🚀",
    },
    {
      id: crypto.randomUUID(),
      description:
        "Real-Time Tracking – Stay updated with live tracking from kitchen to doorstep.",
      icon: "📦",
    },
    {
      id: crypto.randomUUID(),
      description:
        "Flexible Payments – Pay your way—credit/debit cards, digital wallets, or cash on delivery.",
      icon: "💳",
    },
  ];
  return (
    <section className="section-page p-4" id={Routes.ABOUT}>
      <div className="container">
        <div className="text-center">
          <MainHeading title="our story" subtitle="about us" />
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-4 text-gray-600 mt-5">
          <p className="text-left">
            Welcome to <span className="text-primary underline underline-offset-4">Food Ordering </span>,
            your one-stop destination for effortless food ordering and delivery.
            Whether you're craving a quick bite, planning a family meal, or
            exploring new cuisines, we bring your favorite restaurants right to
            your fingertips.
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Why Choose Us ?
            </h2>
            <ul className="flex flex-col gap-2 items-start">
              {ListDescriptions.map((item) => (
                <li key={item.id} className="flex gap-2 items-start sm:items-center">
                  <span className="text-base sm:text-lg">{item.icon}</span>
                  <span className="text-sm sm:text-base">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl text-center font-semibold text-primary">Our Mission</h3>
            <p>
              At <span className="text-primary underline underline-offset-4">Food Ordering</span>, we are dedicated to making food ordering
              simple, convenient, and enjoyable. We connect food lovers with
              their favorite meals while supporting local restaurants and
              businesses. From breakfast to late-night cravings, we’ve got you
              covered.<br/>
            </p>
            <strong className="text-primary text-sm md:text-base">Order now and enjoy your next delicious meal hassle-free!</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
