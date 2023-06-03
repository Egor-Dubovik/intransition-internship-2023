import React, { FC } from 'react';
import Table from 'react-bootstrap/Table';
import { IUser } from '../../../common/types/user';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';

interface IUserTableProps {
  allUsers: IUser[];
  selectedUsers: number[];
  toggleSelectUser: (id: number) => void;
  toggleSelectAll: () => void;
}

const UserTable: FC<IUserTableProps> = ({
  allUsers,
  selectedUsers,
  toggleSelectAll,
  toggleSelectUser,
}) => {
  return (
    <>
      {allUsers ? (
        <Table bordered hover responsive variant="dark">
          <TableHeader
            users={allUsers}
            selectedUsers={selectedUsers}
            onSelectAll={toggleSelectAll}
          />
          <TableBody
            users={allUsers}
            selectedFields={selectedUsers}
            toggleSelect={toggleSelectUser}
          />
        </Table>
      ) : (
        <div>no users found</div>
      )}
    </>
  );
};

export default UserTable;
