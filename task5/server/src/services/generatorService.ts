import { faker, allFakers, Faker } from "@faker-js/faker";
import { PAGE_SIZE } from "../common/constant/pageConstants";
import { IUserData } from "../common/types/user";

class GeneratorService {
  async generateFakeData(locale: string, page: number, seed: number): Promise<IUserData[]> {
    const myFaker = allFakers[locale];
    myFaker.seed(seed + page);
    const data: IUserData[] = Array.from({ length: PAGE_SIZE }, () => this.getDataFields(myFaker));
    return data;
  }

  getDataFields(faker: Faker): IUserData {
    const id = faker.string.uuid();
    const fullName = faker.person.fullName();
    const address = this.generateAddress(faker);
    const phone = faker.phone.number();
    return { id, fullName, address, phone };
  }

  generateAddress(faker: Faker): string {
    const address = `${faker.location.city()}, ${faker.location.streetAddress()}, ${faker.location.zipCode()}`;
    const addressWithState = `${faker.location.state()}, ${address}`;
    return Math.random() < 0.5 ? address : addressWithState;
  }
}

export default new GeneratorService();
