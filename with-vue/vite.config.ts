import { defineConfig } from 'abell'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  abell: {
    serverBuild: {
      target: 'es2022'
    }
  },
  plugins: [vue()]
})
