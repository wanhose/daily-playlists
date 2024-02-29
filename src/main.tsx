import App from 'containers/App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <Navigate replace to="/" />,
  },
];

const node = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(node);
const router = createBrowserRouter(routes);

root.render(<RouterProvider router={router} />);
