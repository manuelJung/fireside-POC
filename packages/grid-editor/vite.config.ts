import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { JsxEmit } from 'typescript'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['lib'], 
      // https://github.com/vuejs/language-tools/issues/1153
      compilerOptions: { jsx: JsxEmit.React },
    }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      formats: ['es'],
    }
  }
})
