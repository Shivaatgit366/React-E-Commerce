import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "./components";

import {
  About,
  Cart,
  Checkout,
  Login,
  Landing,
  HomeLayout,
  Orders,
  Error,
  Register,
  Products,
  SingleProduct,
  Keyzaar,
  CreateData,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/keyzaar",
    element: <Keyzaar />,
    errorElement: <Error />,
  },
  {
    path: "/create-data",
    element: <CreateData />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
