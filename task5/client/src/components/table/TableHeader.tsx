import React from 'react';

const TableHeader = (): JSX.Element => {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__field">№</th>
        <th className="table__field">id</th>
        <th className="table__field">full name</th>
        <th className="table__field">address</th>
        <th className="table__field">phone</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
