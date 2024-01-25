import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import * as pkg from './package.json'

import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import eslint from 'vite-plugin-eslint'
import { babel } from '@rollup/plugin-babel'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('🚀 ~ Current build mode:', mode)
  return defineConfig({
    build: {
      target: ['es2015', 'chrome86'],
      outDir: resolve(__dirname, 'lib'),
      minify: 'terser',
      reportCompressedSize: true,
      lib: {
        entry: resolve(__dirname, './src/lib.ts'),
        name: pkg.name,
        fileName: pkg.name
      },
      rollupOptions: {
        external: ['vue', 'element-ui'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    },

    plugins: [
      eslint(),
      vue2(),
      vue2Jsx(),
      mode === 'development'
        ? legacy()
        : babel({
            babelHelpers: 'runtime',
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', 'ts']
          })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'lib-name': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
