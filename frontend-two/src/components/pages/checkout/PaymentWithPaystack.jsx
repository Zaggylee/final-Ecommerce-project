"use client";
import React from "react";
import { usePaystackPayment } from "react-paystack";
import { useSelector } from "react-redux";
import validator from "validator";
import axios from "axios";
import { useRouter } from "next/navigation";

const PaymentWithPaystack = ({ customerDetails }) => {
  const { totalCost, cartItems } = useSelector((state) => state.cart);
  //to use and route customer back to home page
  const router = useRouter();
  const config = {
    reference: new Date().getTime().toString(),
    email: customerDetails.email,
    amount: totalCost * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TEST_KEY,
  };

  // you can call this function anything
  const onSuccess = async (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    //these are things we will send to the back end
    console.log(reference);
    console.log("total amount paid", totalCost);
    console.log("items ordered", cartItems);
    console.log("customer details", customerDetails);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/order/create",
        {
          reference: reference,
          totalCost: totalCost,
          cartItems: cartItems,
          customerDetails: customerDetails,
        }
      );
      console.log(response);
      alert("order has been placed successfully");
      //this takes the person back to the homepage
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  //function to ensure that the button doesnt auto refresh the page
  function handlePaystackPayment(event) {
    event.preventDefault();

    //function to validate that customer inputs their details
    if (validator.isEmpty(customerDetails.name, { ignore_whitespace: true })) {
      return alert("please provide your name");
    }
    if (validator.isEmail(customerDetails.email) === false) {
      return alert("please provide a valid email address");
    }

    if (
      validator.isEmpty(customerDetails.address, { ignore_whitespace: true })
    ) {
      return alert("please provide house address");
    }

    //ensure that total cost is greater than 0
    if (totalCost <= 0) {
      return alert("please you must order an item");
    }
    /* ***** */

    initializePayment({ onSuccess, onClose });
  }
  return (
    <div>
      <button
        onClick={handlePaystackPayment}
        className="text-black font-bold text-lg bg-amber-800 w-full p-2 cursor-pointer hover:opacity-45 rounded-md shadow-2xl"
      >
        Pay Now
      </button>
    </div>
  );
};
export default PaymentWithPaystack;
