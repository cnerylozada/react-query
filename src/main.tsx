import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { RQSuperHeroes } from "./pages/RQSuperHeroes";
import { SuperHeroes } from "./pages/SuperHerores";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
