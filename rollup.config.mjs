import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

const config = defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "./lib/cjs",
      format: "cjs",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    {
      dir: "./lib/esm",
      format: "es",
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
  ],
  external: /node_modules/,
  plugins: [
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
  ],
});

export default config;
