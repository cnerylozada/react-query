import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { SuperHeroesPage } from "./pages/SuperHerores";
import { HeroDetailPage } from "./pages/HeroDetail";
import { DependendQueriesPage } from "./pages/DependentQueries";

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
        element: <HomePage />,
      },
      {
        path: "/super-heroes",
        element: <SuperHeroesPage />,
      },
      {
        path: "/super-heroes/:heroId",
        element: <HeroDetailPage />,
      },
      { path: "/dependent-queries", element: <DependendQueriesPage /> },
    ],
  },
]);
