import React, { FC } from 'react';
import Button from 'react-bootstrap/Button';
import { Status } from '../../common/constant/user';
import { StatusType } from '../../common/types/user';
import useDeleteUser from '../../hooks/user/useDeleteUser';
import useUpdateStatus from '../../hooks/user/useUpdateStatus';
import './UserAuthToolbar.css';

interface IUserToolbarProps {
  selectedUsersId: number[];
}

const UserAuthToolbar: FC<IUserToolbarProps> = ({ selectedUsersId }) => {
  const { deleteUser } = useDeleteUser();
  const { updateStatus } = useUpdateStatus();

  const handleUpdateStatus = (status: StatusType): void => {
    selectedUsersId.forEach((id) => {
      updateStatus({ id, status });
    });
  };

  const handleBlock = (): void => {
    handleUpdateStatus(Status.Blocked);
  };

  const handleUnblock = (): void => {
    handleUpdateStatus(Status.Active);
  };

  const hadleDelete = (): void => {
    selectedUsersId.forEach((id) => {
      deleteUser(id);
    });
  };

  return (
    <div className="users-auth__toolbar toolbar">
      <h1 className="toolbar__title">User table</h1>
      <div className="toolbar__tools">
        <Button className="toolbar__button" variant="outline-warning" onClick={handleBlock}>
          block
        </Button>
        <Button className="toolbar__button" variant="outline-success" onClick={handleUnblock}>
          unblock
        </Button>
        <Button className="toolbar__button" variant="outline-danger" onClick={hadleDelete}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default UserAuthToolbar;
