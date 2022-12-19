import { DateTime } from "luxon";

export interface DateOptions {
  fmt: string;
  locale?: string;
}

const formatDate = (date: string, opt?: DateOptions) =>
  DateTime.fromISO(date).toFormat(opt?.fmt ?? "yyyy LLL dd", {
    locale: opt?.locale,
  });

const parseDate = (date: string, opt?: DateOptions) =>
  DateTime.fromFormat(date, opt?.fmt || "yyyy-LLL-dd", { locale: opt?.locale });
const dateNow = () => DateTime.now();

export { dateNow, formatDate, parseDate };
