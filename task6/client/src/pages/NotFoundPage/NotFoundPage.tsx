import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PREVIOUS_STEP } from '../../common/constant/interection';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate(PREVIOUS_STEP);
  };

  return (
    <main className="auth-page">
      <h1>Page wasn&apos;t found</h1>
    </main>
  );
};

export default NotFoundPage;
