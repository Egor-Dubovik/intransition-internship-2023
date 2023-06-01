import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { IUser } from '../../../common/types/user';
import { useGetAllUsers } from '../../../hooks/user/useUser';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';

const UserTable = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const { allUsers, isLoading, err } = useGetAllUsers();

  const toggleSelectAll = () => {
    if (selectedUsers.length === (allUsers as IUser[]).length) {
      setSelectedUsers([]);
      return;
    }
    const userIDs = allUsers?.map((user) => user.id);
    setSelectedUsers(userIDs as number[]);
  };

  const toggleSelectUser = (userID: number) => {
    if (selectedUsers.includes(userID)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userID));
      return;
    }
    setSelectedUsers([...selectedUsers, userID]);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      {err && <ErrorMessage message={err.response.data.message || err.message} />}
      {allUsers && (
        <Table bordered hover responsive variant="dark">
          <TableHeader onSelectAll={toggleSelectAll} />
          <TableBody
            users={allUsers}
            selectedFields={selectedUsers}
            toggleSelect={toggleSelectUser}
          />
        </Table>
      )}
    </>
  );
};

export default UserTable;
