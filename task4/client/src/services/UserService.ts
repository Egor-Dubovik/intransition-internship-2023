import { IRegistrationParams, IUser } from '../common/types/user';
import { API } from '../common/constant/api';
import $api from '.';

const UserService = {
  async registration(data: IRegistrationParams): Promise<IUser> {
    const response = await $api.post<IUser>(API.registration, data);
    return response.data;
  },
};

export default UserService;
