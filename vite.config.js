import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

export default defineConfig({
  base: "/React-app/",
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
});
