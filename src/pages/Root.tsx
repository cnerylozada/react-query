import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div>
        <div>
          <Link to={"home"}>Home</Link>
        </div>
        <div>
          <Link to={"super-heroes"}>Super heroes</Link>
        </div>
        <div>
          <Link to={"rq-super-heroes"}>RQ Super heroes</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
