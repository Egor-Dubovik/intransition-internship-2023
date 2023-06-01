import React, { FC } from 'react';
import { IUser } from '../../../common/types/user';
import './TableBody.css';

interface ITableBodyProps {
  users: IUser[];
  selectedFields: number[];
  toggleSelect: (id: number) => void;
}

const TableBody: FC<ITableBodyProps> = ({ users, selectedFields, toggleSelect }) => {
  const getRowClassName = (id: number) =>
    selectedFields.includes(id) ? 'table__row_ponter table-active' : 'table__row_ponter';

  return (
    <tbody className="table__body">
      {users.map((user) => (
        <tr
          key={user.id}
          onClick={() => toggleSelect(user.id)}
          className={getRowClassName(user.id)}
        >
          <td className="table__field">
            <input
              type="checkbox"
              className="table__checkbox"
              checked={selectedFields.includes(user.id)}
              onChange={(event) => event.stopPropagation()}
            />
          </td>
          <td className="table__field">{user.id}</td>
          <td className="table__field">{user.name}</td>
          <td className="table__field">{user.email}</td>
          <td className="table__field">{user.status}</td>
          <td className="table__field">{user.createdAt.toLocaleString()}</td>
          <td className="table__field">{user.createdAt.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
