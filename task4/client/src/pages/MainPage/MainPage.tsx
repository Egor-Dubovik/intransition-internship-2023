import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import UserTable from '../../components/table/UserTable/UserTable';

const MainPage: FC = () => {
  return (
    <main className="main-page">
      <Container>
        <h1>User table</h1>
        <UserTable />
      </Container>
    </main>
  );
};

export default MainPage;
