import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';

interface IErrorResponse {
  data: unknown;
  status: number;
  statusText: string;
  message?: string;
}

const ErrorPage: FC = () => {
  const error = useRouteError() as IErrorResponse;

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default ErrorPage;
