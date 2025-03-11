import { AllProducts } from "@/constant/ProductData";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
      {AllProducts.map((item) => {
        return (
          <ProductCard
            key={item.product_id}
            product_id={item.product_id}
            product_image={item.product_image}
            product_name={item.product_name}
            product_price={item.product_price}
          />
        );
      })}
    </section>
  );
};

export default ProductList;
