import { allFakers, Faker } from "@faker-js/faker";
import { DATA_FIELDS, MIN_ERR, RANDOM_NUMS } from "../common/constant/randomDataConstants";
import { IFakeDataArrayParams, IFakeDataParams, IUserData } from "../common/types/user";
import { ARRAY } from "../common/constant/arrayConstants";
import { ERROR_TYPE } from "../common/constant/error";
import { PAGE_SIZE } from "../common/constant/pageConstats";
import DataManipulator from "./dataManipulator";

class GeneratorService {
  async getFakeDataArray(params: IFakeDataArrayParams) {
    const { locale, seed, pageAmount, errorCount } = params;
    const pageAmountNumber = Number(pageAmount);

    const fakeDataArray = (await Array.from({ length: pageAmountNumber }).reduce(
      async (previousPromise, _, index) => {
        const previousData = (await previousPromise) as IUserData[];
        const page = index + ARRAY.INDEX_BALANSER;
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
      this.getDataFields(myFaker, locale)
    );
    return errorCount > MIN_ERR
      ? this.addErrorToRecordArray(myFaker, data, errorCount, locale)
      : data;
  }

  getDataFields(faker: Faker, locale: string): IUserData {
    const id = faker.string.uuid();
    const fullName = faker.person.fullName();
    const address = this.generateAddress(faker);
    const phone = faker.phone.number();
    return { id, fullName, address, phone };
  }

  generateAddress(faker: Faker): string {
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}, ${faker.location.zipCode()}`;
    const addressWithState = `${faker.location.state()}, ${address}`;
    return faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) < RANDOM_NUMS.AVERAGE
      ? address
      : addressWithState;
  }

  addErrorToRecordArray(faker: Faker, data: IUserData[], errorCount: number, locale: string) {
    return data.map((record) => {
      const randomEntry = faker.helpers.arrayElement(
        Object.entries(record).filter((field) => field[ARRAY.FIRST_EL] !== DATA_FIELDS.ID)
      );
      const fieldWithError = this.addErrorToField(faker, randomEntry, errorCount, locale);
      return { ...record, [fieldWithError[ARRAY.FIRST_EL]]: fieldWithError[ARRAY.SECOND_EL] }; // ??????
    });
  }

  addErrorToField(faker: Faker, field: string[], errorCount: number, locale: string) {
    let newVlue = field[ARRAY.SECOND_EL];
    const randomErrorType = DataManipulator.getRandomErrorType(faker);
    switch (randomErrorType) {
      case ERROR_TYPE.DELETE:
        newVlue = DataManipulator.deleteRandomCharacter(field[ARRAY.SECOND_EL], errorCount, faker);
        break;
      case ERROR_TYPE.ADD:
        field[ARRAY.FIRST_EL] === DATA_FIELDS.PHONE
          ? (newVlue = DataManipulator.addRandomDigit(field[ARRAY.SECOND_EL], errorCount, faker))
          : (newVlue = DataManipulator.addRandomCharacter(
              field[ARRAY.SECOND_EL],
              errorCount,
              locale,
              faker
            ));
        break;
      case ERROR_TYPE.SWAP:
        newVlue = DataManipulator.swapRandomCharacters(field[ARRAY.SECOND_EL], errorCount, faker);
        break;
    }
    return [field[ARRAY.FIRST_EL], newVlue];
  }
}

export default new GeneratorService();
