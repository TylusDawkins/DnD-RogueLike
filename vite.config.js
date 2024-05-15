import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./public/assets"),
      "~@": path.resolve(__dirname, "./src"),
      "@utils": path.resolve(__dirname, "./src/utilities"),
      "@config": path.resolve(__dirname, "./"),
      "@components": path.resolve(__dirname,"./src/components"),
      "@pages": path.resolve(__dirname,"./src/pages"),
    },
  },
  build:{
    cssCodeSplit:false,
    cssMinify:false,
  }
})
