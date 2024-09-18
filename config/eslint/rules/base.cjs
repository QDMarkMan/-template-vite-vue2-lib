/****************************************************************************
 *  @Copyright Tongfu.E
 *  @Author [etongfu@outlook.com].
 *  @Date [2024-09-18 14:22:26].
 *  @Description Base ESLint rules.
 ***************************************************************************/
module.exports = {
  'prettier/prettier': 1,
  'no-shadow': 'off',
  'no-bitwise': 'off',
  'no-plusplus': 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  'no-param-reassign': 0,
  'prefer-regex-literals': 0,
  'import/no-extraneous-dependencies': 0,
  'no-unused-expressions': 0,
  'no-underscore-dangle': 0,
  'import/no-mutable-exports': 0,
  'import/no-cycle': [0, { ignoreExternal: true }],
  'no-await-in-loop': 0,
  'no-console': 0,
  'max-classes-per-file': 'off',
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'always'
    }
  ],
  'import/no-duplicates': 'error',
  'import/prefer-default-export': 0
}
