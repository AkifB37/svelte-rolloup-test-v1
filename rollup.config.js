import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import css from "rollup-plugin-css-only";

export default [
  // JavaScript and CSS compilation
  {
    input: "src/lib/MyComponent.svelte",
    output: [
      { file: "dist/index.js", format: "es", sourcemap: true },
      { file: "dist/index.cjs", format: "cjs", sourcemap: true },
    ],
    plugins: [
      svelte({
        emitCss: true, // Extract and process CSS
      }),
      css({ output: "bundle.css" }), // Output the CSS file
      resolve(),
      typescript(),
    ],
  },
  // // TypeScript type definitions
  // {
  //   input: "src/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
];
