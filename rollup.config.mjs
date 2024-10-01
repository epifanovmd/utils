import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

const pluginsBase = [
  copy({
    targets: [
      { src: "src/api/templates/**/*", dest: "lib/cjs/api/templates" },
      { src: "src/api/templates/**/*", dest: "lib/esm/api/templates" },
    ],
  }),
  peerDepsExternal(),
  resolve(),
  commonjs(),
  terser({
    mangle: {
      keep_fnames: true,
      keep_classnames: true,
    },
  }),
  typescript({ useTsconfigDeclarationDir: true }),
];

const outputParamsBase = {
  exports: "named",
  preserveModules: true,
  preserveModulesRoot: "src",
  sourcemap: true,
};

const output = [
  {
    dir: "./lib/cjs",
    format: "cjs",
    ...outputParamsBase,
  },
  {
    dir: "./lib/esm",
    format: "es",
    exports: "named",
    ...outputParamsBase,
  },
];

const config = defineConfig([
  {
    input: "src/index.ts",
    output: output,
    external: /node_modules/,
    plugins: pluginsBase,
  },
  {
    input: "src/node-utils/index.ts",
    output: output,
    external: /node_modules/,
    plugins: [
      copy({
        targets: [
          {
            src: "src/node-utils/api/templates/**/*",
            dest: "lib/cjs/node-utils/api/templates",
          },
          {
            src: "src/node-utils/api/templates/**/*",
            dest: "lib/esm/node-utils/api/templates",
          },
        ],
      }),
      ...pluginsBase,
    ],
  },
]);

export default config;
