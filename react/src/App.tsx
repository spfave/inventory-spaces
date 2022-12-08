import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from '~/views/root/root';
import ErrorPage from '~/views/error-page';
import Space from '~/views/space';
import About from '~/views/about';
import RootIndex from '~/views/root/root-index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <RootIndex />},
      {
        path: '/:space',
        element: <Space />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {path: '/test', element: <div>test</div>},
]);

export default function App() {
  return <RouterProvider router={router} />;
}
