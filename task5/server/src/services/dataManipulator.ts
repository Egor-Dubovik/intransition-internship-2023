import { Faker } from "@faker-js/faker";
import { ARRAY } from "../common/constant/arrayConstants";
import { MIN_FIELD_LENGTH, RANDOM_NUMS } from "../common/constant/randomDataConstants";
import { generateAlphabetForLocale } from "../utils/alphabetUtils";
import CharacterManipulator from "./CharacterManipulator";

class DataManipulator {
  static getErrorDetails(errorCount: number) {
    const count = Math.floor(errorCount);
    const probability = errorCount - count;
    return { count, probability };
  }

  static deleteRandomCharacter(field: string, errorCount: number, faker: Faker): string {
    let currentCount = errorCount;
    if (errorCount >= field.length)
      currentCount = faker.number.float({ min: RANDOM_NUMS.MIN, max: field.length / 2 });
    const { count, probability } = this.getErrorDetails(currentCount);
    let modifiedField = field;
    for (let i = ARRAY.INIT_VALUE; i < count; i++)
      modifiedField = CharacterManipulator.deleteCharacter(modifiedField, faker);
    if (faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) < probability)
      modifiedField = CharacterManipulator.deleteCharacter(modifiedField, faker);
    return modifiedField;
  }

  static addRandomCharacter(
    field: string,
    errorCount: number,
    locale: string,
    faker: Faker
  ): string {
    const { count, probability } = this.getErrorDetails(errorCount);
    const alphabet = generateAlphabetForLocale(locale);
    let modifiedField = field;
    for (let i = ARRAY.INIT_VALUE; i < count; i++)
      modifiedField = CharacterManipulator.addCharacter(modifiedField, alphabet, faker);
    if (faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) < probability)
      modifiedField = CharacterManipulator.addCharacter(modifiedField, alphabet, faker);
    return modifiedField;
  }

  static addRandomDigit(field: string, errorCount: number, faker: Faker): string {
    const { count, probability } = this.getErrorDetails(errorCount);
    let modifiedField = field;
    for (let i = ARRAY.INIT_VALUE; i < count; i++)
      modifiedField = CharacterManipulator.addDigit(modifiedField, faker);
    if (faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) < probability)
      modifiedField = CharacterManipulator.addDigit(modifiedField, faker);
    return modifiedField;
  }

  static swapRandomCharacters(field: string, errorCount: number, faker: Faker): string {
    const { count, probability } = this.getErrorDetails(errorCount);
    let modifiedField = field;
    for (let i = ARRAY.INIT_VALUE; i < count; i++)
      modifiedField = CharacterManipulator.swapCharacters(modifiedField, faker);
    const reandomFloat = faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX });
    if (reandomFloat < probability && modifiedField.length > MIN_FIELD_LENGTH)
      modifiedField = CharacterManipulator.swapCharacters(modifiedField, faker);
    return modifiedField;
  }

  static getRandomErrorType(faker: Faker) {
    const errorTypes = ["deleteRandomCharacter", "addRandomCharacter", "swapRandomCharacters"];
    const randomIndex = faker.number.int({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.ERR_TYPE });
    return errorTypes[randomIndex];
  }
}

export default DataManipulator;
