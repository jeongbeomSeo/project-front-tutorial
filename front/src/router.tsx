import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home";
import Products from "./containers/products";
import Login from "./containers/login";
import User from "./containers/user";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);

export default router;
