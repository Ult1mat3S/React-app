import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React-app/",
  server: {
    open: true,
  },
  plugins: [react()],
  build: { emptyOutDir: true },
});
