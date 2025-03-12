export default function formatCurrency(amount) {
  return amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });
}
//when an app is deployed the server url changes, this code below helps our url
//change for wherever our server is running, wether locally or deployed
//it is then imported in paymentwithpaystack
export const SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-backend-36qd.onrender.com"
    : "http://localhost:3001";
