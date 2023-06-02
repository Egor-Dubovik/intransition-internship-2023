import { useContext } from 'react';
import { useMutation } from 'react-query';
import { IAxiosError } from '../../common/types/axios';
import { IRegistrationParams, IUser } from '../../common/types/user';
import { UserContext } from '../../context/UserContext';
import UserService from '../../services/UserService';

const useRegistration = () => {
  const { handleLogin } = useContext(UserContext);
  const {
    mutate: registration,
    isSuccess,
    isLoading,
    error,
  } = useMutation({
    mutationKey: ['registration'],
    mutationFn: (data: IRegistrationParams) => UserService.registration(data),
    onSuccess: (userData: IUser) => {
      handleLogin(userData);
    },
  });

  const err = error as IAxiosError<{ message: string }>;
  return { registration, isSuccess, isLoading, err };
};

export default useRegistration;
