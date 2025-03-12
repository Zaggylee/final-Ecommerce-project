"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

/* to upload to vercel we had the window no defined error, because paystack was
uso=ing window which contradicts next.js, so instead of import paymentwithpaystack
from paymentwithpaysatck, we wrote the two lines of code below */
import dynamic from "next/dynamic";

const paystackDynamic = dynamic(() => import("./PaymentWithPaystack"), {
  ssr: false,
});

const CheckOutForm = () => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  //to redirect to market place if item in cart is less than or = to 0
  const { totalCost } = useSelector((state) => state.cart);
  if (totalCost <= 0) {
    return redirect("/marketplace");
    /**     */
  }
  return (
    <form className="my-20 p-4 shadow-md rounded-lg max-w-2xl mx-auto grid gap-4">
      <h2 className="text-amber-800 text-xl font-semibold text-center">
        Complete the form to place your order
      </h2>
      <input
        onChange={(event) =>
          setCustomerDetails({ ...customerDetails, name: event.target.value })
        }
        value={customerDetails.name}
        type="text"
        placeholder="Enter your name"
        className="p-2  w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />
      <input
        onChange={(event) =>
          setCustomerDetails({ ...customerDetails, email: event.target.value })
        }
        value={customerDetails.email}
        type="text"
        placeholder="Email Address example@mail"
        className="p-2 w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />
      <input
        onChange={(event) =>
          setCustomerDetails({
            ...customerDetails,
            address: event.target.value,
          })
        }
        value={customerDetails.address}
        type="text"
        placeholder="Delivery Address"
        className="p-2 w-full border border-amber-500 rounded-md focus:outline focus:outline-amber-800"
      />

      <PaymentWithPaystack customerDetails={customerDetails} />
    </form>
  );
};

export default CheckOutForm;
