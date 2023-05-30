import { Model } from "sequelize";
import bcrypt from "bcrypt";
import { IUser } from "../common/types/user";
import ApiError from "../exceptions/ApiError";
import User from "../models/userModel";

class UserService {
  async registration(data: Partial<IUser>): Promise<Model<IUser>> {
    const { email, password } = data;
    const candidate = await User.findOne({ where: { email } });
    if (candidate) throw ApiError.badRequest(`User with email address ${email} already exists`);
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ ...data, password: hashPassword });
    return user;
  }

  async login(email: string, password: string): Promise<Model<IUser>> {
    const user = await User.findOne({ where: { email } });
    if (!user) throw ApiError.badRequest(`User with this email wasn't found`);
    const storedPassword = user.get("password") as string;
    const isPassEquals = await bcrypt.compare(password, storedPassword);
    if (!isPassEquals) throw ApiError.badRequest("Incorrect password");
    return user;
  }

  async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

export default new UserService();
