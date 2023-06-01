import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Status } from '../../common/constant/user';
import { StatusType } from '../../common/types/user';
import useUpdateStatus from '../../hooks/user/useUpdateStatus';
import './UserAuthToolbar.css';

interface IUserToolbarProps {
  selectedUsersId: number[];
}

const UserAuthToolbar: FC<IUserToolbarProps> = ({ selectedUsersId }) => {
  const [status, setStatus] = useState<StatusType>(Status.Active);
  const { updateStatus, isLoading, err } = useUpdateStatus();

  const switchStatus = (): void => {
    setStatus(status !== Status.Active ? Status.Active : Status.Blocked);
    selectedUsersId.forEach((id) => {
      updateStatus({ id, status });
    });
  };

  const deleteUser = () => {};

  return (
    <div className="users-auth__toolbar toolbar">
      <h1 className="toolbar__title">User table</h1>
      <div className="toolbar__tools">
        <Button className="toolbar__button" variant="outline-warning" onClick={switchStatus}>
          {status === Status.Active ? 'unblock' : 'block'}
        </Button>
        <Button className="toolbar__button" variant="outline-danger">
          delete
        </Button>
      </div>
    </div>
  );
};

export default UserAuthToolbar;
