export const getLocaleForRegion = (region: string): string => {
  switch (region) {
    case "USA":
      return "en";
    case "Poland":
      return "pl";
    case "Russia":
      return "ru";
    default:
      return "en";
  }
};

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

export const getRandomCharacterFromAlphabet = (alphabet: string[]): string => {
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};

export const getRandomDigit = (): string => {
  return Math.floor(Math.random() * 10).toString();
};
