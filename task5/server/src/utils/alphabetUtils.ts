import { Faker } from "@faker-js/faker";

export const generateAlphabetForLocale = (locale: string): string[] => {
  switch (locale) {
    case "en":
      return generateAlphabet(65, 90);
    case "pl":
      return generateAlphabet(260, 378);
    case "ru":
      return generateAlphabet(1040, 1071);
    default:
      return generateAlphabet(65, 90);
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
  const randomIndex = Math.floor(faker.number.float({ min: 0, max: 1 }) * alphabet.length);
  return alphabet[randomIndex];
};

export const getRandomDigit = (faker: Faker): string => {
  return Math.floor(faker.number.float({ min: 0, max: 1 }) * 10).toString();
};
