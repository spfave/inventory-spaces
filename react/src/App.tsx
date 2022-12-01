import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from '~/views/root';
import ErrorPage from '~/views/error-page';

const router = createBrowserRouter([
  {path: '/', element: <Root />, errorElement: <ErrorPage />},
  {path: '/test', element: <div>test</div>},
]);

export default function App() {
  return <RouterProvider router={router} />;
}
