import React, { FC, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Status } from '../../common/constant/user';
import { StatusType } from '../../common/types/user';
import useDeleteUser from '../../hooks/user/useDeleteUser';
import useUpdateStatus from '../../hooks/user/useUpdateStatus';
import SvgArrowUpDown from '../svg/SvgArrowUpDown';
import './UserAuthToolbar.css';

interface IUserToolbarProps {
  selectedUsersId: number[];
}

const UserAuthToolbar: FC<IUserToolbarProps> = ({ selectedUsersId }) => {
  const [status, setStatus] = useState<StatusType>(Status.Active);
  const { deleteUser } = useDeleteUser();
  const { updateStatus } = useUpdateStatus();

  const switchStatusMode = (): void => {
    setStatus(status !== Status.Active ? Status.Active : Status.Blocked);
  };

  const switchStatus = (): void => {
    selectedUsersId.forEach((id) => {
      updateStatus({ id, status });
    });
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
        <ButtonGroup>
          <Button className="toolbar__button" variant="outline-warning" onClick={switchStatus}>
            {status}
          </Button>
          <Button className="toolbar__button" variant="outline-warning" onClick={switchStatusMode}>
            <SvgArrowUpDown />
          </Button>
        </ButtonGroup>
        <Button className="toolbar__button" variant="outline-danger" onClick={hadleDelete}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default UserAuthToolbar;
