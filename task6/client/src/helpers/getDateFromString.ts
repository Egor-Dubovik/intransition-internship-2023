export const getDateFromString = (dateString: string) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const yearOption = currentDate.getFullYear() !== date.getFullYear() ? 'numeric' : undefined;
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: yearOption };
  return date.toLocaleString(undefined, options);
};
