import { Model } from "sequelize";
import { IUser } from "../common/types/user";
import User from "../models/User";

class UserService {
  async login(nickName: string) {
    const user = await User.findOne<Model<IUser>>({ where: { nickName } });
    if (user) return user;
    const newUser = await User.create<Model<IUser>>({ nickName });
    return newUser;
  }

  async findOrCreate(names: string[]) {
    const users = await Promise.all(
      names.map(async (name) => {
        const [user] = await User.findOrCreate<Model<IUser>>({ where: { nickName: name } });
        return user;
      })
    );
    return users;
  }

  async findByNickName(nickName: string) {
    const user = await User.findOne<Model<IUser>>({ where: { nickName } });
    return user;
  }
}

export default new UserService();
