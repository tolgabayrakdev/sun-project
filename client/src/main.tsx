import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import Loading from './components/Loading'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </MantineProvider>
  </React.StrictMode>,
)
