import { createBrowserRouter } from "react-router";
import Protected from "../features/auth/components/Protected";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import CreateProduct from "../features/products/pages/CreateProduct";
import Dashboard from "../features/products/pages/Dashboard";
import Home from "../features/auth/pages/Home";

export const routes = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/seller",
        children: [
            {
                path: "create-product",
                element: (
                    <Protected role="seller">
                        <CreateProduct />
                    </Protected>
                ),
            },
            {
                path: "dashboard",
                element: (
                    <Protected role="seller">
                        <Dashboard />
                    </Protected>
                ),
            },
        ],
    },
]);