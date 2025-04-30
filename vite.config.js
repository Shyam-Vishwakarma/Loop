import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@redux": "/src/redux",
      "@slices": "/src/redux/slices",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@services": "/src/services",
    },
  },
});
