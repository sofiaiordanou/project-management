import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //"homepage": "https://sofiaiordanou.github.io/project-management",
  base: "/project-management",
})
