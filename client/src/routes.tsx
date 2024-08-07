import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const AppLayout = lazy(() => import('./layouts/AppLayout'));
const AppIndexPage = lazy(() => import('./pages/app/Index'));
const AppSettingsPage = lazy(() => import('./pages/app/Settings'));
const AppPersonsPage = lazy(() => import('./pages/app/Persons'));
const AppReportsPage = lazy(() => import('./pages/app/Reports'));

const NotFoundPage = lazy(() => import('./pages/NotFound'));
const HomePage = lazy(() => import('./pages/Home'));
const SubscriptionPage = lazy(() => import('./pages/Subscription'));

const LoginPage = lazy(() => import('./pages/authentication/Login'));
const RegisterPage = lazy(() => import('./pages/authentication/Register'));
const ResetPasswordPage = lazy(() => import('./pages/authentication/ResetPassword'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/subscription',
        element: <SubscriptionPage />
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
        children: [
            { path: '', element: <AppIndexPage /> },
            { path: 'persons', element: <AppPersonsPage /> },
            { path: 'reports', element: <AppReportsPage /> },
            { path: 'settings', element: <AppSettingsPage /> }
        ],
    },
]);

export default routes;
