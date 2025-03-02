import Link from "../link";

function Footer() {
  return (
    <footer className="border-t border-t-gray-200 p-4 ">
      <div className=" container max-w-7xl mx-auto flex ">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 w-full">
          <Link href="/" className="text-primary font-semibold text-2xl ">
            🍕 PIZZA
          </Link>
          <p className="text-gray-500">
            <span className="text-blue-600">&copy;</span> <span className="text-primary font-medium">{new Date().getFullYear()}</span> Pizza. <span className="italic"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
