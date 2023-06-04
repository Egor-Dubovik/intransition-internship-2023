import { Faker } from "@faker-js/faker";
import { generateAlphabetForLocale } from "../utils/alphabetUtils";
import CharacterManipulator from "./CharacterManipulator";

class DataManipulator {
  static getErrorDetails(errorCount: number) {
    const count = Math.floor(errorCount);
    const probability = errorCount - count;
    return { count, probability };
  }

  static deleteRandomCharacter(field: string, errorCount: number, faker: Faker): string {
    if (errorCount >= field.length) return "";
    const { count, probability } = this.getErrorDetails(errorCount);
    let modifiedField = field;
    for (let i = 0; i < count; i++)
      modifiedField = CharacterManipulator.deleteCharacter(modifiedField, faker);
    if (faker.number.float({ min: 0, max: 1 }) < probability)
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
    for (let i = 0; i < count; i++)
      modifiedField = CharacterManipulator.addCharacter(modifiedField, alphabet, faker);
    if (faker.number.float({ min: 0, max: 1 }) < probability)
      modifiedField = CharacterManipulator.addCharacter(modifiedField, alphabet, faker);
    return modifiedField;
  }

  static addRandomDigit(field: string, errorCount: number, faker: Faker): string {
    const { count, probability } = this.getErrorDetails(errorCount);
    let modifiedField = field;
    for (let i = 0; i < count; i++)
      modifiedField = CharacterManipulator.addDigit(modifiedField, faker);
    if (faker.number.float({ min: 0, max: 1 }) < probability)
      modifiedField = CharacterManipulator.addDigit(modifiedField, faker);
    return modifiedField;
  }

  static swapRandomCharacters(field: string, errorCount: number, faker: Faker): string {
    const { count, probability } = this.getErrorDetails(errorCount);
    let modifiedField = field;
    for (let i = 0; i < count; i++)
      modifiedField = CharacterManipulator.swapCharacters(modifiedField, faker);
    if (faker.number.float({ min: 0, max: 1 }) < probability && modifiedField.length > 1)
      modifiedField = CharacterManipulator.swapCharacters(modifiedField, faker);
    return modifiedField;
  }

  static getRandomErrorType(faker: Faker) {
    const errorTypes = ["deleteRandomCharacter", "addRandomCharacter", "swapRandomCharacters"];
    const randomIndex = faker.number.int({ min: 0, max: 2 });
    return errorTypes[randomIndex];
  }
}

export default DataManipulator;
