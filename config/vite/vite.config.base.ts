import { resolve } from 'path'
import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configHtmlPlugin } from './plugin/html'
import VitestConfig from './utils/vitest'

const root = resolve(__dirname, '../../')
const packages = resolve(__dirname, '../../packages')

const BaseConfig = defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': packages,
      packages,
      '#': root,
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json', '.tsx']
  },
  define: {
    'process.env': {}
  },
  test: VitestConfig
})

export const getBaseConfig = async ({ command, mode }) => {
  console.log('🚀 Current running mode :', mode)
  const isBuild = command === 'build'

  const htmlPlugin = configHtmlPlugin(isBuild)

  return mergeConfig(
    {
      plugins: [htmlPlugin]
    },
    BaseConfig
  )
}
