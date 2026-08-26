import { Outlet, NavLink } from "react-router";

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white px-6 py-4 shadow-sm">
        <nav className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }
          >
            Products
          </NavLink>
        </nav>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
