import React from 'react';
import { Container } from 'react-bootstrap';
import RandomDataTable from '../../components/table/RandomDataTable/RandomDataTable';
import ToolBar from '../../components/ToolBar/ToolBar';

const MainPage = (): JSX.Element => {
  return (
    <main className="main-page">
      <Container>
        <ToolBar />
        <RandomDataTable />
      </Container>
    </main>
  );
};

export default MainPage;
