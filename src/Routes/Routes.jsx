import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BrandProductsALL from "../Pages/BrandProductsALL/BrandProductsALL";
import Details from "../Pages/Details/Details";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brand.json"),
      },
      {
        path: "/brandProducts/:name",
        element: (
          <PrivateRoute>
            <BrandProductsALL></BrandProductsALL>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/addtocart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addtocart"),
      },
    ],
  },
]);

export default Routes;