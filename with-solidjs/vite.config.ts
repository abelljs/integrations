import { defineConfig } from 'abell';
import solid from 'vite-plugin-solid';

export default defineConfig({
  abell: {
    esbuild: {
      loader: 'jsx',
      jsxFactory: 'createComponent'
    }
  },
  plugins: [solid({ ssr: true })],
})
