import ProductList from "@/components/pages/marketplace/ProductList";
import Marquee from "react-fast-marquee";

export default function Marketplace() {
  return (
    <section className="container mx-auto p-4">
      <Marquee className="bg-black py-4 rounded-md text-white font-semibold ">
        <p className="ml-4"> Classic ladies wears 👗</p>
        <p className="ml-4"> Bags 🛍️</p>
        <p className="ml-4">women's watches ⌚︎</p>
        <p className="ml-4">exclusive deals 🫱🏻‍🫲🏼</p>
        <p className="ml-4">best prices💸 </p>
        <p className="ml-4">fast delivery 🚚</p>
      </Marquee>
      <h1 className="text-3xl lg:text-5xl my-8 text-amber-700 font-semibold animate-pulse">
        Home of affordable wears
      </h1>
      <ProductList />
    </section>
  );
}
