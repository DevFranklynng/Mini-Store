import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold text-slate-800">RAD5 Mini Store</h1>
      <p className="mt-4 text-lg text-slate-600">
        Find the best tech at honest prices.
      </p>
      <Link
        to="/products"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default Home;
