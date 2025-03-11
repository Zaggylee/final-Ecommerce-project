import express from "express";
import cors from "cors";
import { createNewOrder } from "./controllers/ordersController/createOrder.js";
import dotenv from "dotenv";
import { CONNECT_DATABASE } from "./config/database.js";

dotenv.config();
const app = express();
const PORT = 3001;

//this has to come before any route definition
app.use(cors());
//to access the body we need this middleware
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "hello world" });
});

app.post("/api/v1/order/create", createNewOrder);

app.listen(PORT, async () => {
  await CONNECT_DATABASE();
  console.log("server listening on port : " + PORT);
});
