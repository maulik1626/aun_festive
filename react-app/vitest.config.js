import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@config": "/src/config",
      "@data": "/src/data",
      "@presentation": "/src/presentation",
      "@store": "/src/store",
      "@utils": "/src/utils",
      "@services": "/src/services",
      "@navigation": "/src/navigation",
      "@icons": "/src/assets/images/icons",
    },
  },
});
