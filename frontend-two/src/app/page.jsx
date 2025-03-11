import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto p-4 grid h-[80vh] place-items-center">
      <div className="text-center">
        <h1 className="text-2xl lg:text-7xl font-bold">
          <span className="italic text-amber-500 font-light ">Bespoke </span>
          women's wears available 24/7
        </h1>
        <p className="text-lg text-slate-400 my-8">
          We cater to your fashion needs at budget friendly prices
        </p>
        <Link href="/marketplace">
          <button className="bg-amber-500 text-white font-medium px-10 py-1 rounded-xl">
            shop now
          </button>
        </Link>
      </div>
    </section>
  );
}
