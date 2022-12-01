import {useNavigate, useRouteError} from 'react-router-dom';

type RouteError = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as RouteError;
  console.warn(error);

  function navHome(): void {
    navigate('/', {replace: true});
  }

  return (
    <div className="mx-auto flex h-screen flex-col justify-center gap-2 text-center">
      <h2 className="text-4xl font-bold">Oh No!</h2>
      <p>An unexpected error has occurred</p>
      <p>
        <i>{error?.statusText || error?.message || 'mystery error'}</i>
      </p>
      <button onClick={navHome}>Return Home</button>
    </div>
  );
}
