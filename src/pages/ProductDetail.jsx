import { Link, useNavigate, useParams } from "react-router"
import { products } from "../data/products"

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Product not found
          </h1>

          <p className="mt-3 text-white/40">
            That product doesn't exist in our collection.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold text-black transition hover:bg-orange-400"
          >
            Back to products

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section>
      <button
        onClick={() => navigate(-1)}
        className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition hover:text-orange-500"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </svg>
        Back
      </button>

      <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] lg:grid-cols-2">
        <div className="relative min-h-[400px] overflow-hidden bg-[#1a1a1a] lg:min-h-[600px]">
          <img
            src={`https://picsum.photos/seed/${product.id}/800/800`}
            alt={product.name}
            className="h-full w-full object-cover opacity-85 transition duration-700 hover:scale-105"
          />

          <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            Product 0{product.id}
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Product details
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/45">
            {product.description}
          </p>

          <div className="my-8 h-px bg-white/10" />

          <div>
            <p className="text-sm text-white/40">
              Price
            </p>

            <p className="mt-2 text-4xl font-black text-orange-500">
              N{product.price.toLocaleString()}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-bold text-black transition hover:bg-orange-400"
            >
              View all products

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail