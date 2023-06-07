import { Faker } from "@faker-js/faker";
import { ALPHABET } from "../common/constant/alphabet";
import { PAGE_SIZE } from "../common/constant/pageConstats";
import { LOCALE, RANDOM_NUMS } from "../common/constant/randomDataConstants";

export const generateAlphabetForLocale = (locale: string): string[] => {
  switch (locale) {
    case LOCALE.EN:
      return generateAlphabet(ALPHABET.EN.START, ALPHABET.EN.END);
    case LOCALE.PL:
      return generateAlphabet(ALPHABET.PL.START, ALPHABET.PL.END);
    case LOCALE.RU:
      return generateAlphabet(ALPHABET.RU.START, ALPHABET.RU.END);
    default:
      return generateAlphabet(ALPHABET.EN.START, ALPHABET.EN.END);
  }
};

export const generateAlphabet = (start: number, end: number): string[] => {
  const alphabet: string[] = [];
  for (let i = start; i <= end; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
};

export const getRandomCharacterFromAlphabet = (alphabet: string[], faker: Faker): string => {
  const randomIndex = Math.floor(
    faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX }) * alphabet.length
  );
  return alphabet[randomIndex];
};

export const getRandomDigit = (faker: Faker): string => {
  const randomFloat = faker.number.float({ min: RANDOM_NUMS.MIN, max: RANDOM_NUMS.MAX });
  return Math.floor(randomFloat * PAGE_SIZE).toString();
};
