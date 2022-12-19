import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "lib/index.mjs.js",
      format: "es",
      sourcemap: true,
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [
    external(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      plugins: ["external-helpers"],
    }),
    resolve(),
    commonjs(),
    terser(),
    typescript(),
  ],
};
