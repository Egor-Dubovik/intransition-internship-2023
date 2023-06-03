export const getLocaleForRegion = (region: string): string => {
  switch (region) {
    case "USA":
      return "en_US";
    case "Poland":
      return "pl";
    case "Russia":
      return "ru";
    default:
      return "en_US";
  }
};
