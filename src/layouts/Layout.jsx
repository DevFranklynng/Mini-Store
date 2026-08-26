import { NavLink, Outlet } from "react-router"

function Layout() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white">
      <header className="border-b border-white/10 bg-[#0b0b0b]/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5 text-black"
              >
                <path d="M6 8h12l1 12H5L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
            </div>

            <span className="text-xl font-black tracking-tight">
              MINI<span className="text-orange-500">STORE</span>
            </span>
          </NavLink>

          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-orange-500 text-black"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" />
                <path d="M9 21v-6h6v6" />
              </svg>
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-orange-500 text-black"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path d="M4 5h16v14H4z" />
                <path d="M4 9h16M8 5v4M16 5v4" />
              </svg>
              Products
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout