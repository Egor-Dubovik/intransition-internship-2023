import {
  IDeleteResponse,
  ILoginParams,
  IRegistrationParams,
  IUpdateStatusParams,
  IUser,
} from '../common/types/user';
import { API } from '../common/constant/api';
import $api from '.';

const UserService = {
  async registration(data: IRegistrationParams): Promise<IUser> {
    const response = await $api.post<IUser>(API.registration, data);
    return response.data;
  },

  async login(data: ILoginParams): Promise<IUser> {
    const response = await $api.post<IUser>(API.login, data);
    return response.data;
  },

  async getAllUsers(): Promise<IUser[]> {
    const response = await $api.get<IUser[]>(API.user);
    return response.data;
  },

  async getUser(id: number): Promise<IUser | null> {
    const response = await $api.get<IUser | null>(`${API.user}/${id}`);
    return response.data;
  },

  async updateStatus(data: IUpdateStatusParams): Promise<IUser | null> {
    const response = await $api.put<IUser | null>(API.user, data);
    return response.data;
  },

  async delete(id: number): Promise<IDeleteResponse> {
    const response = await $api.delete<IDeleteResponse>(API.user, { params: { id } });
    return response.data;
  },
};

export default UserService;
