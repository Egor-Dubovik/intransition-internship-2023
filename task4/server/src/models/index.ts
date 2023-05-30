import { Model } from "sequelize";
import User from "./userModel";

interface Models {
  [key: string]: typeof Model;
}

const models: Models = { User };

export const syncModels = async () => {
  for (const modelName in models) {
    if (Object.hasOwnProperty.call(models, modelName)) {
      await models[modelName].sync({ alter: true });
    }
  }
};
