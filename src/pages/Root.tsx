import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  const activeStyles = (isActive: boolean) => (isActive ? "text-blue-500" : "");

  return (
    <div>
      <div
        className="p-3 flex justify-center items-center space-x-4
        border-b bg-blue-50"
      >
        <div>
          <NavLink
            to={"/home"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/super-heroes"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Super heroes
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/colors"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Colors
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/dependent-queries"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Dependent queries
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/lazy-friends"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Lazy Friends
          </NavLink>
        </div>
        <div>
          <NavLink
            to={"/products"}
            className={({ isActive }) => activeStyles(isActive)}
          >
            Nested Products
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
