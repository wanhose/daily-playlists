import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Fallback } from 'components/Fallback';
import { App } from 'containers/App';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';

const client = new QueryClient();

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  }
];

const node = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(node);
const router = createBrowserRouter(routes);

root.render(
  <QueryClientProvider client={client}>
    <Suspense fallback={<Fallback text="Loading..." />}>
      <RouterProvider router={router} />
    </Suspense>
  </QueryClientProvider>
);
