/* eslint-env node */
const path = require('path')

module.exports = {
  root: true,
  extends: ['./config/eslint/eslint.cjs'],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  rules: {}
}
