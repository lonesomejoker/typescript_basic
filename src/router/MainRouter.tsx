import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.tsx";
import Drinks from "../pages/Drinks.tsx";
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/drinks",
    element: <Drinks />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;

