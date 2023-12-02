import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div
        className="p-3 flex justify-center items-center space-x-4
        border-b bg-blue-50"
      >
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div>
          <Link to={"/super-heroes"}>Super heroes</Link>
        </div>
        <div>
          <Link to={"/dependent-queries"}>Dependent queries</Link>
        </div>
        <div>
          <Link to={"/products"}>Nested Products</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
