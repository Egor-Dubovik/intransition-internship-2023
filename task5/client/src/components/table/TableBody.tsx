import React from 'react';
import { useAppSelector } from '../../app/store/hooks';
import { selectUsers } from '../../reducers/randomUsersSlice';

const TableBody = () => {
  const randomUsers = useAppSelector(selectUsers);

  return (
    <tbody className="table__body">
      {randomUsers.map((user, index) => (
        <tr key={user.id}>
          <td className="table__field">{index + 1}</td>
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
