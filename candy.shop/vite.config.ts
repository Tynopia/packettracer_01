import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "[name][extname]",
                chunkFileNames: "[name].js",
                entryFileNames: "[name].js"
            }
        }
    }
})
