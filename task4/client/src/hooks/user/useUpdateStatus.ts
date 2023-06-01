import { useMutation, useQueryClient } from 'react-query';
import { IAxiosError } from '../../common/types/axios';
import { IUpdateStatusParams } from '../../common/types/user';
import UserService from '../../services/UserService';

const useUpdateStatus = () => {
  const client = useQueryClient();

  const { mutate, isSuccess, isLoading, error } = useMutation({
    mutationKey: ['user status'],
    mutationFn: (data: IUpdateStatusParams) => UserService.updateStatus(data),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateStatus = async (data: IUpdateStatusParams) => {
    mutate(data);
  };

  const err = error as IAxiosError<{ message: string }>;
  return { updateStatus, isSuccess, isLoading, err };
};

export default useUpdateStatus;
