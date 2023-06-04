import { allFakers, Faker } from "@faker-js/faker";
import { PAGE_SIZE } from "../common/constant/pageConstants";
import { IUserData } from "../common/types/user";
import DataManipulator from "./dataManipulator";

interface IFakeDataParams {
  locale: string;
  page: number;
  seed: number;
  errorCount: number;
}

class GeneratorService {
  async generateFakeData(params: IFakeDataParams): Promise<IUserData[]> {
    const { locale, page, seed, errorCount } = params;
    const myFaker = allFakers[locale];
    myFaker.seed(seed + page);
    const data: IUserData[] = Array.from({ length: PAGE_SIZE }, () =>
      this.getDataFields(myFaker, errorCount, locale)
    );
    return data;
  }

  getDataFields(faker: Faker, errorCount: number, locale: string): IUserData {
    const id = faker.string.uuid();
    const fullName = faker.person.fullName();
    const address = this.generateAddress(faker);
    const phone = faker.phone.number();

    const data = { fullName, address, phone };
    const dataWithErrors = this.addErrorToField(faker, data, errorCount, locale);
    return errorCount > 0 ? { id, ...dataWithErrors } : { id, ...data };
  }

  addErrorToField(faker: Faker, userData: IUserData, errorCount: number, locale: string) {
    const fields = Object.keys(userData);
    const newData = { ...userData };

    for (const field of fields) {
      const randomErrorType = DataManipulator.getRandomErrorType(faker);
      if (randomErrorType === "deleteRandomCharacter") {
        newData[field] = DataManipulator.deleteRandomCharacter(newData[field], errorCount);
      } else if (randomErrorType === "addRandomCharacter") {
        if (field === "phone") {
          newData[field] = DataManipulator.addRandomDigit(newData[field], errorCount);
          continue;
        }
        newData[field] = DataManipulator.addRandomCharacter(newData[field], errorCount, locale);
      } else if (randomErrorType === "swapRandomCharacters") {
        newData[field] = DataManipulator.swapRandomCharacters(newData[field], errorCount);
      }
    }

    return newData;
  }

  generateAddress(faker: Faker): string {
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}, ${faker.location.zipCode()}`;
    const addressWithState = `${faker.location.state()}, ${address}`;
    return Math.random() < 0.5 ? address : addressWithState;
  }
}

export default new GeneratorService();
