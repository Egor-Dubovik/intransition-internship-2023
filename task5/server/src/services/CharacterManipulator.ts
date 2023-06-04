import { Faker } from "@faker-js/faker";
import { getRandomCharacterFromAlphabet, getRandomDigit } from "../utils/alphabetUtils";

class CharacterManipulator {
  static addDigit(field: string, faker: Faker): string {
    const index = Math.floor(faker.number.float({ min: 0, max: 1 }) * (field.length + 1));
    const randomCharacter = getRandomDigit(faker);
    return field.slice(0, index) + randomCharacter + field.slice(index);
  }

  static swapCharacters(field: string, faker: Faker): string {
    const index = Math.floor(faker.number.float({ min: 0, max: 1 }) * (field.length - 1));
    return field.slice(0, index) + field[index + 1] + field[index] + field.slice(index + 2);
  }

  static addCharacter(field: string, alphabet: string[], faker: Faker): string {
    const index = Math.floor(faker.number.float({ min: 0, max: 1 }) * (field.length + 1));
    const randomCharacter = getRandomCharacterFromAlphabet(alphabet, faker);
    return field.slice(0, index) + randomCharacter + field.slice(index);
  }

  static deleteCharacter(field: string, faker: Faker): string {
    const index = Math.floor(faker.number.float({ min: 0, max: 1 }) * field.length);
    return field.slice(0, index) + field.slice(index + 1);
  }
}

export default CharacterManipulator;
