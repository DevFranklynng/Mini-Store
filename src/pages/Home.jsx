import { Link } from "react-router"

function Home() {
  return (
    <section className="relative flex min-h-[calc(100vh-130px)] items-center overflow-hidden">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2 text-sm text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Simple shopping. Better experience.
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Everything you need.
            <span className="block text-orange-500">Nothing you don't.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/50">
            Discover a carefully selected collection of everyday tech,
            devices and accessories without the clutter.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 font-bold text-black transition duration-300 hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]"
            >
              Explore products

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 font-medium text-white/70 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Browse collection
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold">05</p>
              <p className="mt-1 text-sm text-white/40">Products</p>
            </div>

            <div>
              <p className="text-2xl font-bold">01</p>
              <p className="mt-1 text-sm text-white/40">Simple goal</p>
            </div>

            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="mt-1 text-sm text-white/40">Always open</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-orange-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-medium text-white/40">
                Featured
              </span>

              <span className="flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Available
              </span>
            </div>

            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#1a1a1a]">
              <img
                src="https://picsum.photos/seed/1/600"
                alt="Featured product"
                className="h-full w-full object-cover opacity-80 transition duration-500 hover:scale-105"
              />
            </div>

            <div className="flex items-end justify-between pt-5">
              <div>
                <p className="text-sm text-white/40">01 / Collection</p>
                <h2 className="mt-1 text-2xl font-bold">Itel P55</h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-black">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home