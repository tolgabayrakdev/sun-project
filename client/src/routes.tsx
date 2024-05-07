import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("./pages/NotFound"));


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export default routes;