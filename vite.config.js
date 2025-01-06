import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Customize build options if necessary
    rollupOptions: {
      // Handle any warnings that might occur during the build
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
    },
  },
})
// npm run build
// npm run preview