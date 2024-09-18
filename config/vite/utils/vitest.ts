/** **************************************************************************
 *  @Copyright Tongfu.E
 *  @Author [etongfu@outlook.com].
 *  @Date [2024-06-13 17:14:49].
 *  @Description Vitest config.
 ************************************************************************** */
/// <reference types="vitest" />

export default {
  include: ['src/**/*.spec.ts'],
  server: {
    deps: {
      inline: ['element-plus']
    }
  },
  environment: 'happy-dom'
}
