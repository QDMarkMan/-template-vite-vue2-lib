import { defineConfig, mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { getBaseConfig } from './vite.config.base'
import { resolve } from 'node:path'

export default defineConfig(async params => {
  const baseConfig = await getBaseConfig(params)
  return mergeConfig(
    {
      mode: 'development',
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'packages/app/main.ts') // 确保路径正确
          }
        }
      },
      server: {
        fs: {
          strict: true
        },
        watch: {
          ignored: ['node_modules/**', 'dist/**'],
          usePolling: true,
          interval: 300,
          binaryInterval: 300
        }
      },

      plugins: [
        eslint({
          cache: false,
          include: ['packages/**/*.ts', 'packages/**/*.tsx', 'packages/**/*.vue'],
          exclude: ['node_modules', 'dist', 'lib']
        })
      ]
    },
    baseConfig
  )
})
