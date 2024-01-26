module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['feat', 'fix', 'publish', 'chore', 'docs', 'style', 'refactor', 'test']
    ],
    'subject-case': [2, 'never', ['sentence-case', 'pascal-case']],
    'subject-full-stop': [0, 'never']
  }
}
