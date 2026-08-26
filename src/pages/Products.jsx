import { Link } from "react-router"
import { products } from "../data/products"

function Products() {
  return (
    <section>
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            The collection
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Browse products
          </h1>

          <p className="mt-3 max-w-xl text-white/45">
            A small selection of useful tech and accessories, picked for
            everyday life.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/40">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          {products.length} products
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-[#161616]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
              <img
                src={`https://picsum.photos/seed/${product.id}/600/450`}
                alt={product.name}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />

              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-sm font-bold backdrop-blur-md">
                0{product.id}
              </div>

              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-black opacity-0 transition duration-300 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold transition-colors group-hover:text-orange-500">
                  {product.name}
                </h2>

                <span className="whitespace-nowrap text-sm font-semibold text-orange-500">
                  N{product.price.toLocaleString()}
                </span>
              </div>

              <p className="min-h-12 text-sm leading-6 text-white/40">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-medium text-white/50">
                  View details
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products