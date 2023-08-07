import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home";
import Products from "./containers/products";
import SignUp from "./containers/signup";
import User from "./containers/user";
import Layout from "./layout";
import NotFound from "./exception/notFound";
import { loader as userLoader } from "./routes/router";
import Login from "./containers/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: userLoader,
        // Loader를 사용할 경우 모종의 이유로 서버로부터 데이터를 가져오지 "못하면" 오류가 발생하는데, 이떄 errorElement가 실행되고 있는 상황 발생
        errorElement: <div>Not Active Loader</div>,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
