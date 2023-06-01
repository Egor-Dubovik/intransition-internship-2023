import React, { FC } from 'react';
import './TableHeader.css';

interface ITableHeaderProps {
  onSelectAll: () => void;
}

const TableHeader: FC<ITableHeaderProps> = ({ onSelectAll }) => {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__field_select-all" onClick={onSelectAll}>
          sel/desel (all)
        </th>
        <th className="table__field">id</th>
        <th className="table__field">name</th>
        <th className="table__field">email</th>
        <th className="table__field">status</th>
        <th className="table__field">lastLoginAt</th>
        <th className="table__field">createdAt</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
