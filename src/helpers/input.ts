import { DivideOpt, toDivide } from "./number";

type Options = {
  type: "text" | "number" | "floating";
  divide?: boolean;
  divideOpt?: DivideOpt;
};

export const replaceInputString = (text: string, opts?: Options) => {
  let _value = "";

  if (text === "") {
    return "";
  }

  if (opts?.type === "number") {
    _value = Number(text.replace(/,/g, ".").replace(/[^0-9]/g, "")).toString();
    if (opts?.divide) {
      _value = toDivide(Number(_value), opts?.divideOpt);
    }
  } else if (opts?.type === "floating") {
    _value = text
      .replace(/,/g, ".")
      .replace(/[^0-9.]/g, "")
      .replace(/^([^\\.]*\.)|\./g, "$1");

    if (_value === ".") {
      _value = "0.";
    }

    if (_value[0] === "0" && _value[1] && _value[1] !== ".") {
      _value = Number(_value).toString();
    }
  } else {
    _value = text;
  }

  return _value;
};
