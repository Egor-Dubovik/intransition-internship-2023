import React, { FC, useState } from 'react';
import { Container } from 'react-bootstrap';
import { IUser } from '../../common/types/user';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import UserTable from '../../components/table/UserTable/UserTable';
import { useGetAllUsers } from '../../hooks/user/useUser';

const AuthUserInfo: FC = () => {
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

  return (
    <Container>
      <h1>User table</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {err && <ErrorMessage message={err.response.data.message || err.message} />}
          <UserTable
            toggleSelectUser={toggleSelectUser}
            toggleSelectAll={toggleSelectAll}
            selectedUsers={selectedUsers}
            allUsers={allUsers as IUser[]}
          />
        </>
      )}
    </Container>
  );
};

export default AuthUserInfo;
