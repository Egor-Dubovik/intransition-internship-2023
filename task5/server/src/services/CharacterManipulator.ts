import { getRandomCharacterFromAlphabet, getRandomDigit } from "../utils/alphabetUtils";

class CharacterManipulator {
  static addDigit(field: string): string {
    const index = Math.floor(Math.random() * (field.length + 1));
    const randomCharacter = getRandomDigit();
    return field.slice(0, index) + randomCharacter + field.slice(index);
  }

  static swapCharacters(field: string): string {
    const index = Math.floor(Math.random() * (field.length - 1));
    return field.slice(0, index) + field[index + 1] + field[index] + field.slice(index + 2);
  }

  static addCharacter(field: string, alphabet: string[]): string {
    const index = Math.floor(Math.random() * (field.length + 1));
    const randomCharacter = getRandomCharacterFromAlphabet(alphabet);
    return field.slice(0, index) + randomCharacter + field.slice(index);
  }

  static deleteCharacter(field: string): string {
    const index = Math.floor(Math.random() * field.length);
    return field.slice(0, index) + field.slice(index + 1);
  }
}

export default CharacterManipulator;
