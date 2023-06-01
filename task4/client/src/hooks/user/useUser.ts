import { useQuery } from 'react-query';
import { IAxiosError } from '../../common/types/axios';
import UserService from '../../services/UserService';

export const useGetAllUsers = () => {
  const {
    data: allUsers,
    isLoading,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => UserService.getAllUsers(),
  });

  const err = error as IAxiosError<{ message: string }>;
  return { allUsers, isLoading, isSuccess, err };
};
