import React from "react";
import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product.type";
import { AlertCircle, SearchX } from "lucide-react";

function Menu({ items }: { items: ProductWithRelations[] }) {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <div className=" my-10 max-w-lg md:max-w-md mx-auto">
      <div className="flex flex-col  items-center justify-center gap-2 text-center p-6 bg-gray-100 border border-red-200 rounded-lg shadow-md">
        <AlertCircle size={48} className="text-red-500 mb-2 animate-pulse" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 font-mono">
          Product Not Found
        </h2>
        <p className="text-gray-600 text-sm italic">
          The product you're looking for doesn't exist or is out of stock.
        </p>
      </div>
    </div>
  );
}

export default Menu;
