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
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRootDir = path.resolve(__dirname);

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
