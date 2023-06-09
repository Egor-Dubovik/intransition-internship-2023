import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Status } from '../../common/constant/user';
import { IAxiosError } from '../../common/types/axios';
import { IUpdateStatusParams, IUser } from '../../common/types/user';
import { UserContext } from '../../context/UserContext';
import { ROUTES } from '../../router/routes.enum';
import UserService from '../../services/UserService';

const useUpdateStatus = () => {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const client = useQueryClient();

  const {
    mutate: updateStatus,
    isSuccess,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ['user status'],
    mutationFn: (data: IUpdateStatusParams) => UserService.updateStatus(data),
    onSuccess: (data: IUser | null) => {
      client.invalidateQueries({ queryKey: ['users'] });
      if (user?.id === data?.id && data?.status === Status.Blocked) {
        navigate(ROUTES.LOGIN);
        handleLogout();
      }
    },
  });

  const err = error as IAxiosError<{ message: string }>;
  return { updateStatus, isSuccess, isLoading, err };
};

export default useUpdateStatus;
