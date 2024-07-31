import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  cacheDir: "../../node_modules/.vite",
  plugins: [
    solidPlugin(),
    dts({
      rollupTypes: true,
      bundledPackages: ["solid-styled-components"],
      // copyDtsFiles: true,
    }),
  ],
  server: {
    port: 7000,
  },
  build: {
    outDir: "../../dist/solidjs-ui",
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "solidjs-ui",
      fileName: "main",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "SolidWeb",
          "solid-styled-components": "@jon-codewolf/solidjs-ui",
        },
      },
    },
  },
});
