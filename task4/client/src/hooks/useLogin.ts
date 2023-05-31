import { useMutation } from 'react-query';
import { IAxiosError } from '../common/types/axios';
import { ILoginParams, IUser } from '../common/types/user';
import UserService from '../services/UserService';

const useLogin = () => {
  const { mutate, isSuccess, isLoading, error } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: ILoginParams) => UserService.login(data),
    onSuccess: (data: IUser) => {
      localStorage.setItem('user', JSON.stringify(data));
    },
  });

  const login = async (data: ILoginParams) => {
    mutate(data);
  };

  const err = error as IAxiosError<{ message: string }>;
  return { login, isSuccess, isLoading, err };
};

export default useLogin;
