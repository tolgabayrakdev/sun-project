import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFoundPage = lazy(() => import("./pages/NotFound"));
const HomePage = lazy(() => import("./pages/Home"));


const LoginPage = lazy(() => import("./pages/authentication/Login"))



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);


export default routes;