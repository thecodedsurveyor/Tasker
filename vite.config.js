import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          animations: ["framer-motion"],
          icons: ["react-icons"],
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  css: {
    postcss: {
      plugins: [
        require("autoprefixer"),
        require("cssnano")({
          preset: [
            "default",
            {
              discardComments: {
                removeAll: true,
              },
              normalizeWhitespace: true,
            },
          ],
        }),
      ],
    },
  },
});
