import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

const RandomDataTable = (): JSX.Element => {
  return (
    <section className="random-users">
      <h1>Fake user data</h1>
      <Table className="random-users__table" bordered hover responsive variant="dark">
        <TableHeader />
        <TableBody />
      </Table>
    </section>
  );
};

export default RandomDataTable;
