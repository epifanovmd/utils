import { v4 } from "uuid";
import { generate } from "shortid";

export const numberId = () =>
  Math.floor(
    Date.now() +
      Number(
        Math.floor(Number(Math.random().toString(8)) * 10000).toString() +
          Math.floor(Number(Math.random().toString(10)) * 10000).toString(),
      ),
  );

export const uuid = () => v4();
export const shortid = () => generate();
