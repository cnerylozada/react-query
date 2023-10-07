import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { SuperHeroes } from "./pages/SuperHerores";
import { RQSuperHeroes } from "./pages/RQSuperHeroes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/super-heroes",
        element: <SuperHeroes />,
      },
      {
        path: "/rq-super-heroes",
        element: <RQSuperHeroes />,
      },
    ],
  },
]);
