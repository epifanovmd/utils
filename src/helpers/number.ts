import { v4 } from "uuid";
import shortid from "shortid";

export interface IGenIdOptions {
  type?: "numeric" | "uuid" | "shortid";
}

export const genId = (opt?: IGenIdOptions) => {
  switch (opt?.type) {
    case "uuid":
      return v4();
    case "shortid":
      return shortid.generate();
    default:
      return Number(
        Math.floor(Number(Math.random().toString(8)) * 10000).toString() +
          Math.floor(Number(Math.random().toString(10)) * 10000).toString(),
      );
  }
};

export type DivideOpt = { separator?: string };

export const toDivide = (num: number, opt?: DivideOpt) => {
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
