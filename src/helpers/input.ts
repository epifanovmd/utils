import { DivideOpt, toDivide } from "./number";

type Options = {
  type: "text" | "number" | "floating";
  divide?: boolean;
  divideOpt?: DivideOpt;
};

export const replaceInputString = (
  text: string,
  { type, divide, divideOpt }: Options,
) => {
  let _value = "";

  if (type === "text") {
    _value = text;
  } else if (type === "number") {
    _value = Number(text.replace(/[^0-9]/g, "")).toString();
    if (divide) {
      _value = toDivide(Number(_value), divideOpt);
    }
  } else if (type === "floating") {
    _value = Number(
      text
        .replace(/,/g, ".")
        .replace(/[^0-9.]/g, "")
        .replace(/^([^\\.]*\.)|\./g, "$1"),
    ).toString();

    if (divide) {
      _value = toDivide(Number(_value), divideOpt);
    }
  } else {
    _value = text;
  }

  return _value;
};
