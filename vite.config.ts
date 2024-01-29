import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default ({ mode }) => {
  console.log('🚀 ~ Current build mode:', mode)

  const isBuildApp = process.env.BUILD_TARGET === 'app'
  const name = 'lib-name'

  return defineConfig({
    build: isBuildApp
      ? {}
      : {
          target: ['es2015', 'chrome86'],
          outDir: resolve(__dirname, 'lib'),
          minify: 'terser',
          reportCompressedSize: true,
          lib: {
            entry: resolve(__dirname, './src/lib.ts'),
            name,
            fileName: name
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        },
    plugins: [eslint(), vue(), jsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'lib-name': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
