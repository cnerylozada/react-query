import { Navigate, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { HomePage } from "./pages/Home";
import { SuperHeroesPage } from "./pages/SuperHerores";
import { HeroDetailPage } from "./pages/HeroDetail";
import { DependendQueriesPage } from "./pages/DependentQueries";
import { ProductsRoot } from "./pages/ProductsRoot";
import { ProductsFeatured } from "./pages/ProductsFeatured";
import { ColorsPage } from "./pages/Colors";
import { ColorDetail } from "./pages/ColorDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "colors",
        element: <ColorsPage />,
      },
      {
        path: "colors/:colorId",
        element: <ColorDetail />,
      },
      {
        path: "super-heroes",
        element: <SuperHeroesPage />,
      },
      {
        path: "super-heroes/:heroId",
        element: <HeroDetailPage />,
      },
      { path: "dependent-queries", element: <DependendQueriesPage /> },
      {
        path: "products",
        element: <ProductsRoot />,
        children: [
          { index: true, element: <div>Welcome to products section</div> },
          {
            path: "featured",
            element: <ProductsFeatured />,
          },
          {
            path: "new",
            element: (
              <div>
                <div>Products New</div>
              </div>
            ),
          },
        ],
      },
    ],
  },
]);
