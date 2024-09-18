import { defineConfig, mergeConfig } from 'vite'
import { getBaseConfig } from './vite.config.base'
import configCompressPlugin from './plugin/compress'
import configVisualizerPlugin from './plugin/visualizer'

/** @type {import('vite').UserConfig} */
export default defineConfig(async params => {
  const baseConfig = await getBaseConfig(params)
  return mergeConfig(
    {
      mode: 'production',
      plugins: [configCompressPlugin('gzip'), configVisualizerPlugin()],
      esbuild: {
        pure: ['console.log'],
        drop: ['debugger']
      },
      build: {
        target: 'es2015',
        cssTarget: 'chrome80',
        rollupOptions: {
          output: {
            manualChunks: {
              vue: ['vue']
            }
          }
        },
        chunkSizeWarningLimit: 2000
      }
    },
    baseConfig
  )
})
