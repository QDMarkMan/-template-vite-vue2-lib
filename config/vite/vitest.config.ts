import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import getViteConfig from './vite.config'

export default defineConfig(async params => {
  const config = await getViteConfig(params)
  return mergeConfig(
    config,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/*'],
        root: fileURLToPath(new URL('./', import.meta.url))
      }
    })
  )
})
