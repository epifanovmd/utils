type EnumValueType = string | number;

export const getEnumNames = (e: any): string[] =>
  Object.keys(e).filter(key => isNaN(+key));

export const getEnumNamesAndValues = <T extends EnumValueType>(
  e: any,
): { name: string; value: T }[] =>
  getEnumNames(e).map(_name => ({
    name: _name,
    value: e[_name] as T,
  }));

export const getEnumNameFromValue = <T extends EnumValueType>(
  e: any,
  value: T,
): string | null => {
  const all = getEnumNamesAndValues(e).filter(pair => pair.value === value);

  return all.length === 1 ? all[0].name : null;
};

export const getEnumValues = <T extends EnumValueType>(e: any): T[] =>
  getEnumNames(e).map(name => e[name]) as T[];
