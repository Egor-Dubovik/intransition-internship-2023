import { IUserData, IUserParams } from '../common/types/user';
import { API } from '../common/constant/api';
import $api from '.';

export const getRandomUsers = async (params: IUserParams): Promise<IUserData[]> => {
  const response = await $api.get(API.generator, { params });
  return response.data;
};
