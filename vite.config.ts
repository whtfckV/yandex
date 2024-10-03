import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import Fonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    Fonts({
      google: {
        families: [
          {
            name: "IBM Plex Sans",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@images": "/src/assets/images",
      "@icons": "/src/assets/icons",
      "@routes": "/src/routes",
      "@contexts": "/src/contexts",
      "@hooks": "/src/hooks",
    },
  },
});
