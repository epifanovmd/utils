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

const generateApiService = (params: IGenerateApiServiceParams) =>
  generateApi({
    httpClientType: "axios",
    templates: "./templates",
    modular: true,
    extractRequestBody: true,
    extractRequestParams: true,
    cleanOutput: true,
    ...params,
  });

export { type IGenerateApiServiceParams, generateApi, generateApiService };
