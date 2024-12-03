export const camelize = (str: string) =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) {
      return "";
    }

    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });

export const stringCapitalize = (str: string): string =>
  (str?.length || 0) > 0 ? str[0].toUpperCase() + str.slice(1) : str;

export const stringUnCapitalize = (str: string): string =>
  (str?.length || 0) > 0 ? str[0].toLowerCase() + str.slice(1) : str;
