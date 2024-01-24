module.exports = {
	extends: ['@commitlint/config-conventional'],
	"rules": {
    "scope-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "test"
      ]
    ]
  }
}
