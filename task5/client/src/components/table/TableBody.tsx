import React from 'react';
import { IUserData } from '../../common/types/user';

const TableBody = () => {
  const randomUsers = [] as IUserData[];

  return (
    <tbody className="table__body">
      {randomUsers.map((user) => (
        <tr key={user.id}>
          <td className="table__field">{user.id}</td>
          <td className="table__field">{user.fullName}</td>
          <td className="table__field">{user.address}</td>
          <td className="table__field">{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
