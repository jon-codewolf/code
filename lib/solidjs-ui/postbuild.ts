import packageJson from "./package.json";
import rootPackageJson from "../../package.json";

const distPackageJson = {
  ...packageJson,
  peerDependencies: Object.fromEntries(
    Object.entries(packageJson.peerDependencies).filter(([dep]) => {
      return !(dep in rootPackageJson.devDependencies);
    })
  ),
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

await Bun.write('../../dist/solidjs-ui/package.json', JSON.stringify(distPackageJson, null, 2))
console.log('package.json has been written to the dist directory.');