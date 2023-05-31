import { useMutation } from 'react-query';
import { IAxiosError } from '../common/types/axios';
import { IRegistrationParams, IUser } from '../common/types/user';
import UserService from '../services/UserService';

const useRegistration = () => {
  const { mutate, isSuccess, isLoading, error } = useMutation({
    mutationKey: ['registration'],
    mutationFn: (data: IRegistrationParams) => UserService.registration(data),
    onSuccess: (data: IUser) => {
      localStorage.setItem('user', JSON.stringify(data));
    },
  });

  const registration = async (data: IRegistrationParams) => {
    mutate(data);
  };

  const err = error as IAxiosError<{ message: string }>;
  return { registration, isSuccess, isLoading, err };
};

export default useRegistration;
