import { Model } from "sequelize";
import { Chat, UserChat } from "./Chat";
import Message from "./Message";
import User from "./User";

interface Models {
  [key: string]: typeof Model;
}

const models: Models = { User, Chat, UserChat, Message };

User.hasMany(Message);
Message.belongsTo(User);
Chat.belongsToMany(User, { through: UserChat });
User.belongsToMany(Chat, { through: UserChat });
Chat.hasMany(Message);

export const syncModels = async () => {
  for (const modelName in models) {
    if (Object.hasOwnProperty.call(models, modelName)) {
      await models[modelName].sync({ alter: true });
    }
  }
};
