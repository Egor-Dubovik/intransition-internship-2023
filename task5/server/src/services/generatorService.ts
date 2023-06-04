import { allFakers, Faker } from "@faker-js/faker";
import { PAGE_SIZE } from "../common/constant/pageConstants";
import { IFakeDataParams, IUserData } from "../common/types/user";
import DataManipulator from "./dataManipulator";

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

  generateAddress(faker: Faker): string {
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}, ${faker.location.zipCode()}`;
    const addressWithState = `${faker.location.state()}, ${address}`;
    return faker.number.float({ min: 0, max: 1 }) < 0.5 ? address : addressWithState;
  }

  addErrorToField(faker: Faker, userData: IUserData, errorCount: number, locale: string) {
    const newData = { ...userData };
    for (const field in newData) {
      const randomErrorType = DataManipulator.getRandomErrorType(faker);
      switch (randomErrorType) {
        case "deleteRandomCharacter":
          newData[field] = DataManipulator.deleteRandomCharacter(newData[field], errorCount, faker);
          break;
        case "addRandomCharacter":
          field === "phone"
            ? (newData[field] = DataManipulator.addRandomDigit(newData[field], errorCount, faker))
            : (newData[field] = DataManipulator.addRandomCharacter(
                newData[field],
                errorCount,
                locale,
                faker
              ));
          break;
        case "swapRandomCharacters":
          newData[field] = DataManipulator.swapRandomCharacters(newData[field], errorCount, faker);
          break;
      }
    }
    return newData;
  }
}

export default new GeneratorService();
