/** **************************************************************************
 *  @Copyright Tongfu.E
 *  @Author [etongfu@outlook.com].
 *  @Date [2024-06-13 17:14:49].
 *  @Description Vitest config.
 ************************************************************************** */
/// <reference types="vitest" />
import { fileURLToPath } from 'node:url'
import { configDefaults } from 'vitest/config'

export default {
  environment: 'happy-dom',
  include: ['**/*.spec.ts'],
  exclude: [...configDefaults.exclude, 'e2e/*'],
  root: fileURLToPath(new URL('../../../', import.meta.url))
  // server: {
  //   deps: {
  //     inline: ['element-plus']
  //   }
  // },
}
