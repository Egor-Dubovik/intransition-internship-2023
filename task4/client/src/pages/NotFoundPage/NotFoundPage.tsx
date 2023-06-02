import React, { FC } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PREVIOUS_STEP } from '../../common/constant/interection';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate(PREVIOUS_STEP);
  };

  return (
    <main className="auth-page">
      <Container>
        <h1>Page wasn&apos;t found</h1>
        <Button variant="primary" onClick={handleGoBack}>
          go back
        </Button>
      </Container>
    </main>
  );
};

export default NotFoundPage;
