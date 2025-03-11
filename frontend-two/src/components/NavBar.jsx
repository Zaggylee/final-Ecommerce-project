"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  //getting number of items from the cart slice
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header className="border border-amber-500 p-2">
      <nav className="mx-auto container flex justify-between items-center">
        <img
          className="w-16 h-16"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM440EV5PmMU6jaDnnfHNGdZN_H-j-XdGwA&s"
          alt="our logo"
        />
        <div className="flex gap-4 items-center">
          <Link
            href={"/marketplace"}
            className="flex gap-2 items-center text-lg font-medium hover:text-amber-500 transition-colors duration-500"
          >
            shop
          </Link>

          <Link
            href={"/cart"}
            className=" relative flex gap-2 items-center text-lg font-medium hover:text-amber-500 transition-colors duration-500"
          >
            {/* this displays number of items in the cart */}
            <p className=" absolute right-[35px] -top-[20px] bg-amber-600 text-white h-7 w-7 font-semibold rounded-full grid place-items-center">
              {cartItems.length}
            </p>
            <ShoppingCart />
            <span>cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
