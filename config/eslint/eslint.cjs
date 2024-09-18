/** ---------------------------------------------------------------------------------------------
 *  @Author [Tongfu.E].
 *  @Email [etongfu@outlook.com].
 *  @Date [2024-09-18 14:24:27].
 *  @Des Core Lint rules..
 *-------------------------------------------------------------------------------------------- */
const BaseRules = require('./rules/base.cjs')
const VueRules = require('./rules/vue.cjs')
const TypeScriptRules = require('./rules/typescript.cjs')

/* eslint-env node */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    'browser': true,
    'node': true,
    'vue/setup-compiler-macros': true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    ...BaseRules,
    ...VueRules,
    ...TypeScriptRules
  },
  ignorePatterns: ['dist/', 'node_modules/', '*.svg', '*.sh', 'Makefile'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
