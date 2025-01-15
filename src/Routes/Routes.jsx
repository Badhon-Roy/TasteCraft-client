import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from './../Pages/PrivateRoute/PrivateRoute';
import Order from "../Pages/Order/Order/Order";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/ourMenu",
                element : <PrivateRoute><OurMenu></OurMenu></PrivateRoute>
            },
            {
                path : "/order/:category",
                element : <Order></Order>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            }
        ]
    },
    {
        path : "/dashboard",
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : "cart" ,
                element : <Cart></Cart>
            },
            {
                path : "payment",
                element : <Payment></Payment>
            },

            // admin only routes
            {
                path : "addItems",
                element : <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path : "manageItems",
                element : <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
              path: 'updateItem/:id',
              element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
              loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
            ,
            {
              path: 'users',
              element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);
