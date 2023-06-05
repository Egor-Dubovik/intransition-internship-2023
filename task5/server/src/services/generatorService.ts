import { allFakers, Faker } from "@faker-js/faker";
import { PAGE_SIZE } from "../common/constant/pageConstants";
import { IFakeDataArrayParams, IFakeDataParams, IUserData } from "../common/types/user";
import DataManipulator from "./dataManipulator";

class GeneratorService {
  async getFakeDataArray(params: IFakeDataArrayParams) {
    const { locale, seed, pageAmount, errorCount } = params;
    const pageAmountNumber = Number(pageAmount);

    const fakeDataArray = (await Array.from({ length: pageAmountNumber }).reduce(
      async (previousPromise, _, index) => {
        const previousData = (await previousPromise) as IUserData[];
        const page = index + 1;
        const fakeData = await this.generateFakeData({ locale, seed, page, errorCount });
        return previousData.concat(fakeData);
      },
      Promise.resolve([])
    )) as IUserData[];
    return fakeDataArray;
  }

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
    let fieldWithError: keyof IUserData | undefined;
    const data = { id, fullName, address, phone };

    const randomField = faker.helpers.arrayElement(
      Object.keys(data).filter((field) => field !== "id")
    );
    const fieldWitError = this.addErrorToField(faker, data[randomField], errorCount, locale);
    return errorCount !== 0 ? { ...data, [randomField]: fieldWitError } : data;
  }

  generateAddress(faker: Faker): string {
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}, ${faker.location.zipCode()}`;
    const addressWithState = `${faker.location.state()}, ${address}`;
    return faker.number.float({ min: 0, max: 1 }) < 0.5 ? address : addressWithState;
  }

  addErrorToField(faker: Faker, field: string, errorCount: number, locale: string) {
    let newfield = field;
    const randomErrorType = DataManipulator.getRandomErrorType(faker);
    switch (randomErrorType) {
      case "deleteRandomCharacter":
        newfield = DataManipulator.deleteRandomCharacter(field, errorCount, faker);
        break;
      case "addRandomCharacter":
        field === "phone"
          ? (newfield = DataManipulator.addRandomDigit(field, errorCount, faker))
          : (newfield = DataManipulator.addRandomCharacter(field, errorCount, locale, faker));
        break;
      case "swapRandomCharacters":
        newfield = DataManipulator.swapRandomCharacters(field, errorCount, faker);
        break;
    }
    return newfield;
  }
}

export default new GeneratorService();
