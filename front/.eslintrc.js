module.exports = {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
    extends: [
        "plugin:vue/essential"
      ],
    parserOptions: {
        "ecmaVersion": 2017,
        parser: "@babel/eslint-parser",
        sourceType: 'module',
        allowImportExportEverywhere: true,
        "extends": "plugin:vue/base"
      }
  }