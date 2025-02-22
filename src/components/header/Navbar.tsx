"use client";
import { Pages, Routes } from "@/constant/enum";
import Link from "../link";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  //! Array For Links:
  const links = [
    {
      id: crypto.randomUUID(),
      title: "Menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "About",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "Contact",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex-1 flex justify-end">
      <Button
        className="lg:hidden hover:bg-primary hover:text-white transition-colors duration-200"
        onClick={() => setOpenMenu(true)}
        size={"sm"}
        variant={"secondary"}
      >
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`${
          openMenu ? "top-0 z-50" : "-top-full"
        } fixed lg:sticky left-0 px-10 py-20 lg:p-0 bg-gray-50 lg:bg-transparent transition-all duration-200 flex-col lg:flex-row h-full lg:h-auto w-full lg:w-auto flex items-center gap-10`}
      >
        <Button
          variant={"destructive"}
          size={"sm"}
          className="absolute top-5 right-5 rounded-lg group lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6 group-hover:rotate-90 transition-transform duration-300" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${link.href}`}
              className={`font-semibold ${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({ size: "lg" })} !rounded-full !px-8`
                  : "text-gray-500 hover:text-primary transition-colors duration-200"
              } `}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
