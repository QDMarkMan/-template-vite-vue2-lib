import { resolve } from 'node:path'

import { defineConfig, mergeConfig } from 'vite'
import { getBaseConfig } from './vite.config.base'
import configVisualizerPlugin from './plugin/visualizer'

export default defineConfig(async params => {
  const name = 'lib-name'
  const baseConfig = await getBaseConfig(params)
  return mergeConfig(
    {
      mode: 'production',
      plugins: [configVisualizerPlugin()],
      esbuild: {
        pure: ['console.log'],
        drop: ['debugger']
      },
      build: {
        target: ['es2015', 'chrome86'],
        outDir: resolve(__dirname, '../../lib'),
        minify: 'terser',
        reportCompressedSize: true,
        lib: {
          entry: resolve(__dirname, '../../packages/core/lib.ts'),
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
      }
    },
    baseConfig
  )
})
