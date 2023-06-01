import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { IAxiosError } from '../../common/types/axios';
import { IDeleteResponse } from '../../common/types/user';
import { UserContext } from '../../context/UserContext';
import { ROUTES } from '../../router/routes.enum';
import UserService from '../../services/UserService';

const useDeleteUser = () => {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  const client = useQueryClient();

  const {
    mutate: deleteUser,
    isLoading,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: ['user delete'],
    mutationFn: (id: number) => UserService.delete(id),
    onSuccess: (data: IDeleteResponse) => {
      client.invalidateQueries({ queryKey: ['users'] });
      if (user?.id === data.id) {
        navigate(ROUTES.LOGIN);
        handleLogout();
      }
    },
  });

  const err = error as IAxiosError<{ message: string }>;
  return { deleteUser, isSuccess, isLoading, err };
};

export default useDeleteUser;
