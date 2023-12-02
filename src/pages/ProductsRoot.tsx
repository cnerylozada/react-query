import { NavLink, Outlet } from "react-router-dom";

export const ProductsRoot = () => {
  return (
    <div>
      <div
        className="p-3 flex justify-center items-center space-x-4
        border-b bg-yellow-50"
      >
        <div>
          <NavLink
            to="featured"
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            Featured
          </NavLink>
        </div>
        <div>
          <NavLink
            to="new"
            className={({ isActive }) => (isActive ? "text-blue-400" : "")}
          >
            New
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
