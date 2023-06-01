import React, { FC, useState } from 'react';
import { Container } from 'react-bootstrap';
import { IUser } from '../../common/types/user';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import UserTable from '../../components/table/UserTable/UserTable';
import UserAuthToolbar from '../../components/UserAuthToolbar/UserAuthToolbar';
import { useGetAllUsers } from '../../hooks/user/useUser';

const AuthUserInfo: FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const { allUsers, isLoading, err } = useGetAllUsers();

  const toggleSelectAll = () => {
    const userIDs = allUsers?.map((user) => user.id);
    const allSelected = selectedUsers.length === (allUsers as IUser[]).length;
    setSelectedUsers(allSelected ? [] : (userIDs as number[]));
  };

  const toggleSelectUser = (userID: number) => {
    selectedUsers.includes(userID)
      ? setSelectedUsers(selectedUsers.filter((id) => id !== userID))
      : setSelectedUsers([...selectedUsers, userID]);
  };

  return (
    <section className="main-page__auth-users users-auth">
      <Container>
        <UserAuthToolbar selectedUsersId={selectedUsers} />
        {!isLoading ? (
          <>
            {err && <ErrorMessage message={err.response.data.message || err.message} />}
            <UserTable
              toggleSelectUser={toggleSelectUser}
              toggleSelectAll={toggleSelectAll}
              selectedUsers={selectedUsers}
              allUsers={allUsers as IUser[]}
            />
          </>
        ) : (
          <Loader />
        )}
      </Container>
    </section>
  );
};

export default AuthUserInfo;
