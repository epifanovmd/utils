import { v4 } from "uuid";

export interface IGenIdOptions {
  type?: "numeric" | "uuid";
}

export const genId = (opt?: IGenIdOptions) => {
  switch (opt?.type) {
    case "uuid":
      return v4();
    default:
      return Number(
        Math.floor(Number(Math.random().toString(8)) * 10000).toString() +
        Math.floor(Number(Math.random().toString(10)) * 10000).toString(),
      );
  }
};


const toDivide = (num: number, opt?: { separator?: string }) => {
  const int = String(Math.trunc(Number(num || 0)));

  if (int.length <= 3) {
    return int;
  }
  let space = 0;
  let number = "";

  // eslint-disable-next-line no-plusplus
  for (let i = int.length - 1; i >= 0; i--) {
    if (space == 3) {
      number = `${opt?.separator || " "}${number}`;
      space = 0;
    }
    number = int.charAt(i) + number;
    space += 1;
  }

  return number;
};
