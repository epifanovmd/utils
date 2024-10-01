import { generateApi, Hooks } from "swagger-typescript-api";

interface IGenerateApiServiceParamsBase {
  output: string;
  addReadonly?: boolean;
  hooks?: Partial<Hooks>;
}

interface IGenerateApiServiceParamsFromPath
  extends IGenerateApiServiceParamsBase {
  input: string;
}

interface IGenerateApiServiceParamsFromUrl
  extends IGenerateApiServiceParamsBase {
  url: string;
}

type IGenerateApiServiceParams =
  | IGenerateApiServiceParamsFromPath
  | IGenerateApiServiceParamsFromUrl;

import path from "path";

const projectRootDir = path.resolve(import.meta.dirname);

const generateApiService = (params: IGenerateApiServiceParams) =>
  generateApi({
    httpClientType: "axios",
    templates: path.resolve(projectRootDir, "./templates"),
    modular: true,
    extractRequestBody: true,
    extractRequestParams: true,
    cleanOutput: true,
    ...params,
  });

export { type IGenerateApiServiceParams, generateApi, generateApiService };
