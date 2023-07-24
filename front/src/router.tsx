import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home";
import Products from "./containers/products";
import SignUp from "./containers/signup";
import User from "./containers/user";
import Layout from "./layout";
import NotFound from "./containers/notFound";
import { loader as userLoader } from "./routes/router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: userLoader,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
