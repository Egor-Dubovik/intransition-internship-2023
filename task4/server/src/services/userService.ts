import { IUser } from "../common/types/user";
import ApiError from "../exceptions/ApiError";
import User from "../models/userModel";

class UserService {
  async registration(data: Partial<IUser>) {
    const { email } = data;
    const candidate = await User.findOne({ where: { email } });
    if (candidate) throw ApiError.badRequest(`User with email address ${email} already exists`);
    const user = await User.create(data);
    return user;
  }
}

export default new UserService();
