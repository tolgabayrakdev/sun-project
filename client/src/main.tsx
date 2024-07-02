import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import Loading from './components/Loading';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <Notifications position="top-right" />
            <Suspense fallback={<Loading />}>
                <RouterProvider router={routes} />
            </Suspense>
        </MantineProvider>
    </React.StrictMode>,
);
