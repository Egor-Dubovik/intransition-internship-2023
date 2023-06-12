import { useEffect } from 'react';
import { useAppDispatch } from '../app/store/hooks';
import { IUser } from '../common/types/user';
import { setUserData } from '../features/LoginForm/userSlice';

export const useLogin = (isSuccess: boolean, data: IUser | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data as IUser));
      localStorage.setItem('user', JSON.stringify(data));
    }
  }, [isSuccess, data, dispatch]);
};
