import User from "../models/User";

class UserService {
  async login(nickName: string) {
    const user = await User.findOne({ where: { nickName } });
    if (user) return user;
    const newUser = await User.create({ nickName });
    return newUser;
  }
}

export default new UserService();
