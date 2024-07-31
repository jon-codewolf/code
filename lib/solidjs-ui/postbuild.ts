import { copy } from 'fs-extra/esm'

const outDir = "../../dist/solidjs-ui"

import packageJson from "./package.json";
const distPackageJson = {
  ...packageJson,
  peerDependencies: { "solid-js": packageJson.peerDependencies["solid-js"] },
  exports: {
    ".": {
      import: "./main.js",
      require: "./main.umd.cjs",
    },
  },
  files: ["**/*"],
  main: "./main.cjs",
  module: "./main.js",
  scripts: undefined,
  types: "./main.d.ts",
};

await copy("./src/assets", `${outDir}/assets`)
await Bun.write(
 `${outDir}/package.json`,
  JSON.stringify(distPackageJson, null, 2)
);
console.log("package.json has been written to the dist directory.");


