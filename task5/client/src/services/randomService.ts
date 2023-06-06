import { IUserByAmountParams, IUserData, IUserParams } from '../common/types/user';
import { API } from '../common/constant/api';
import { saveAs } from 'file-saver';
import $api from '.';

export const getRandomUsers = async (params: IUserParams): Promise<IUserData[]> => {
  const response = await $api.get(API.generator, { params });
  return response.data;
};

export const getScvFile = async (params: IUserByAmountParams): Promise<void> => {
  const response = await $api.get(API.csv, { params, responseType: 'blob' });
  const blob = new Blob([response.data], { type: 'text/csv' });
  saveAs(blob, 'fake_data.csv');
};
