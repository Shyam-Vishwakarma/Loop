import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@ui": "/src/components/ui",
      "@pages": "/src/pages",
      "@common": "/src/components/common",
      "@features": "/src/components/features",
      "@redux": "/src/redux",
      "@slices": "/src/redux/slices",
      "@assets": "/src/assets",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
      "@services": "/src/services",
    },
  },
});
