import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/calculator.ts"],
  clean: true,
  format: ["cjs", "esm"],
  dts: true,
});
