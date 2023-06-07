import { Faker } from "@faker-js/faker";
import { ARRAY } from "../common/constant/arrayConstants";
import { RANDOM_NUMS } from "../common/constant/randomDataConstants";
import { getRandomCharacterFromAlphabet, getRandomDigit } from "../utils/alphabetUtils";

class CharacterManipulator {
  static addDigit(field: string, faker: Faker): string {
    const index = Math.floor(
      faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) *
        (field.length + ARRAY.INDEX_BALANSER)
    );
    const randomCharacter = getRandomDigit(faker);
    return field.slice(ARRAY.INIT_VALUE, index) + randomCharacter + field.slice(index);
  }

  static swapCharacters(field: string, faker: Faker): string {
    const index = Math.floor(
      faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) *
        (field.length - ARRAY.INDEX_BALANSER)
    );
    return (
      field.slice(ARRAY.INIT_VALUE, index) +
      field[index + ARRAY.INDEX_BALANSER] +
      field[index] +
      field.slice(index + 2)
    );
  }

  static addCharacter(field: string, alphabet: string[], faker: Faker): string {
    const index = Math.floor(
      faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) *
        (field.length + ARRAY.INDEX_BALANSER)
    );
    const randomCharacter = getRandomCharacterFromAlphabet(alphabet, faker);
    return field.slice(0, index) + randomCharacter + field.slice(index);
  }

  static deleteCharacter(field: string, faker: Faker): string {
    const index = Math.floor(
      faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) * field.length
    );
    return field.slice(ARRAY.INIT_VALUE, index) + field.slice(index + ARRAY.INDEX_BALANSER);
  }
}

export default CharacterManipulator;
