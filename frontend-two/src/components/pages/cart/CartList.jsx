"use client";
import {
  increaseProductQty,
  decreaseProductQty,
  deleteCartItem,
} from "@/features/cart/cartSlice";
import formatCurrency from "@/utils/helper";
import { Delete, Plus, Minus } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //this is used to navigate from inside a function to anywhere
  const router = useRouter();

  //pop up to return if shopping cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="bg-amber-50 rounded-md p-6 text-center">
        <h1 className="text-3xl text-amber-800 font-semibold">
          sorry Your Cart is empty
        </h1>
        <button
          onClick={() => router.push("/marketplace")}
          className=" font-semibold text-black p-2 rounded-md shadow-2xl mt-6 bg-amber-800 text-lg"
        >
          Start shopping
        </button>
      </div>
    );
  }
  return (
    <div className="bg-amber-50 max-w-[600px] rounded-md">
      {cartItems.map((item) => {
        return (
          <div
            key={item.product_id}
            className="border-b border-gray-200 p-3 flex gap-5"
          >
            <div>
              <img
                className="w-[85px] rounded-md mb-2"
                src={item.product_image}
                alt=""
              />
              <button
                onClick={() => dispatch(deleteCartItem(item.product_id))}
                className="bg-amber-800 p-1 font-bold text-white rounded-md hover:opacity-80 cursor-pointer"
              >
                <Delete />
              </button>
            </div>

            <h3 className="font-serif font-semibold text-amber-800 mr-auto text-lg">
              {item.product_name}
            </h3>
            <div>
              <h3 className="text-black font-semibold mb-4 text-lg">
                {formatCurrency(item.product_price)}
              </h3>
              <div className="flex items-center gap-2 ">
                <button
                  onClick={() => dispatch(decreaseProductQty(item.product_id))}
                  className="border border-black rounded-md hover:opacity-80 cursor-pointer"
                >
                  <Minus />
                </button>
                <span>{item.product_quantity}</span>
                <button
                  onClick={() => dispatch(increaseProductQty(item.product_id))}
                  className="border border-black rounded-md hover:opacity-80 cursor-pointer"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
