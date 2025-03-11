import { OrderModel } from "../../models/ordersModel/order.js";
import validator from "validator";

async function createNewOrder(req, res) {
  //destruturing the req.body where our details are
  const { customerDetails, cartItems, reference, totalCost } = req.body;
  //check if customer name is provided
  if (validator.isEmpty(customerDetails.name)) {
    return res.status(400).json({ message: "please provide customer name" });
  }
  //check if customer provided a valid email
  if (validator.isEmail(customerDetails.email) === false) {
    return res.status(400).json({ message: "please provide customer email" });
  }
  //check if customer provided a valid address
  if (validator.isEmpty(customerDetails.address)) {
    return res.status(400).json({ message: "please provide a valid address" });
  }
  //check if totalCost is present
  if (totalCost < 0) {
    return res.status(400).json({ message: "please provide order cost" });
  }
  //check if items were ordered
  if (cartItems.length === 0) {
    return res.status(400).json({ message: "please order some items" });
  }

  //check if payment reference is present
  if (validator.isEmpty(reference.trxref)) {
    return res.status(400).json({ message: "transaction reference is needed" });
  }
  //now to create the record
  try {
    const order = await OrderModel.create({
      customerDetails: customerDetails,
      totalCost: totalCost,
      cartItems: cartItems,
      refernce: reference,
    });
    return res.status(201).json({ messag: "Order Created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
export { createNewOrder };
