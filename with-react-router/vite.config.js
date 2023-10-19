import { defineConfig } from 'abell';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  abell: {
    esbuild: {
      loader: 'jsx',
    }
  },
  plugins: [react()],
  build: {
    // Using top-level await for code-splitting for now. We can probably figure out some other way
    target: 'esnext',
    rollupOptions: {
      output: {
        interop: 'compat'
      }
    }
  },
})
