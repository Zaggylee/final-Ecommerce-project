"use client";
import { AllProducts } from "@/constant/ProductData";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

import formatCurrency from "@/utils/helper";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/features/cart/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const [productInformation, setProductInformation] = useState(undefined);

  const dispatch = useDispatch();

  function getProductDetails() {
    const singleProductDetail = AllProducts.find(
      (item) => item.product_id === params.product_id
    );
    setProductInformation(singleProductDetail);
  }
  useEffect(() => {
    getProductDetails();
  }, []);
  if (productInformation === undefined) {
    return (
      <div className="grid place-items-center h-[60vh]">
        <h1>sorry product not found</h1>
      </div>
    );
  }
  return (
    <section className="container mx-auto py-20 px-4 flex  flex-col lg:flex-row gap-8 justify-center">
      <div>
        <img
          className="w-[500px] h-[500px] object-cover rounded-md "
          src={productInformation.product_image}
          alt={productInformation.product_name}
        />
      </div>
      <div className="bg-amber-50 p-4 rounded-md">
        <h1 className="text-amber-900 text-4xl font-semibold font-serif mb-4">
          {productInformation.product_name}
        </h1>
        <p className="text-lg text-gray-500 mb-4">
          {formatCurrency(productInformation.product_price)}
        </p>
        <p className=" border-y border-gray-200 py-2 mb-4 text-lg">
          <strong>Category: </strong>
          {productInformation.product_category}
        </p>
        <p className="text-gray-500 mb-4">
          {productInformation.product_description}
        </p>
        <button
          onClick={() => dispatch(addItemToCart(productInformation))}
          className="bg-amber-500 text-black p-2 font-semibold w-full shadow-2xl rounded-md hover:opacity-70 cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
