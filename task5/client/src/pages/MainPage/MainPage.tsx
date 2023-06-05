import React from 'react';
import { Container } from 'react-bootstrap';
import ToolBar from '../../components/ToolBar/ToolBar';
const MainPage = (): JSX.Element => {
  return (
    <main className="main-page">
      <Container>
        <ToolBar />
      </Container>
    </main>
  );
};

export default MainPage;
