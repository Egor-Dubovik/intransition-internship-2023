import React, { FC } from 'react';
import { IUser } from '../../../common/types/user';
import './TableHeader.css';

interface ITableHeaderProps {
  users: IUser[];
  selectedUsers: number[];
  onSelectAll: () => void;
}

const TableHeader: FC<ITableHeaderProps> = ({ users, selectedUsers, onSelectAll }) => {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <th className="table__field_select-all" onClick={onSelectAll}>
          <input
            type="checkbox"
            className="table__checkbox"
            checked={users.length === selectedUsers.length}
            onChange={onSelectAll}
          />
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
