import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/authentication/Login"));
const RegisterPage = lazy(() => import("./pages/authentication/Register"));

const HomePage = lazy(() => import("./pages/Home"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    }
]);

export default routes;