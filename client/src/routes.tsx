import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/authentication/Login"));
const RegisterPage = lazy(() => import("./pages/authentication/Register"));

const HomePage = lazy(() => import("./pages/Home"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

const ExplorePage = lazy(() => import("./pages/explore/Index"));
const ExploreLayout = lazy(() => import("./layouts/ExploreLayout"));

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
        path: "/explore",
        element: <ExploreLayout />,
        children: [
            { path: "", element: <ExplorePage /> }
        ]
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