import { useContext } from 'react';
import { useMutation } from 'react-query';
import { IAxiosError } from '../../common/types/axios';
import { ILoginParams, IUser } from '../../common/types/user';
import { UserContext } from '../../context/UserContext';
import UserService from '../../services/UserService';

const useLogin = () => {
  const { handleLogin } = useContext(UserContext);
  const {
    mutate: login,
    data: userData,
    isSuccess,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILoginParams) => UserService.login(data),
    onSuccess: (userData: IUser) => {
      handleLogin(userData);
    },
  });

  const err = error as IAxiosError<{ message: string }>;
  return { login, userData, isSuccess, isLoading, err };
};

export default useLogin;
