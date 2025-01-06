import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
      external: ['react-router-dom'], // Adding react-router-dom as an external dependency
    },
  },
})
