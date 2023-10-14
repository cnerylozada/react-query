import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { SuperHeroesPage } from "./pages/SuperHerores";
import { HeroDetailPage } from "./pages/HeroDetail";

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
        element: <SuperHeroesPage />,
      },
      {
        path: "/super-heroes/:heroId",
        element: <HeroDetailPage />,
      },
    ],
  },
]);
