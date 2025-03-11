import formatCurrency from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  product_id,
  product_image,
  product_name,
  product_price,
}) => {
  return (
    <div className="border border-gray-200 rounded-md">
      <img
        className="w-[500px] h-[200px] lg:h-[300px] object-cover mx-auto hover:w-[200px] hover:object-contain rounded-md transition-all duration-300"
        src={product_image}
        alt={product_name}
      />
      <Link href={`/marketplace/${product_id}`}>
        <h3 className="font-bold p-2 hover:underline underline-offset-2">
          {product_name}
        </h3>
      </Link>

      <p className="text-gray-500 p-2">{formatCurrency(product_price)}</p>
    </div>
  );
};

export default ProductCard;
