import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const AppLayout = lazy(() => import('./layouts/AppLayout'));
const AppIndexPage = lazy(() => import('./pages/app/Index'));

const NotFoundPage = lazy(() => import('./pages/NotFound'));
const HomePage = lazy(() => import('./pages/Home'));

const LoginPage = lazy(() => import('./pages/authentication/Login'));
const RegisterPage = lazy(() => import('./pages/authentication/Register'));
const ResetPasswordPage = lazy(
    () => import('./pages/authentication/ResetPassword'),
);

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/reset-password',
        element: <ResetPasswordPage />,
    },
    {
        path: '/app',
        element: <AppLayout />,
        children: [{ path: '', element: <AppIndexPage /> }],
    },
]);

export default routes;
