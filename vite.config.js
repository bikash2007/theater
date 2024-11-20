import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Replace with your repository name
  server: {
    host: "0.0.0.0", // Listens on all network interfaces
    port: 3000, // You can use any available port
  },
});
