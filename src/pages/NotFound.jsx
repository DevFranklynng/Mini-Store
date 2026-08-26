import { Link } from "react-router"

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] px-6 py-16 text-center sm:px-12">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-9 w-9"
            >
              <path d="M9 9h.01M15 9h.01" />
              <path d="M8 15c1.2-1.2 2.4-1.8 4-1.8s2.8.6 4 1.8" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>

          <p className="mt-8 text-7xl font-black tracking-tighter text-orange-500 sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            Lost in the store?
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-white/40">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link
            to="/"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3.5 font-bold text-black transition hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)]"
          >
            Back home

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="m11 18-6-6 6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound