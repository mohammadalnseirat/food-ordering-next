import Link from "../link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link href="/" className="text-primary font-semibold text-2xl">
          🍕 PIZZA
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
