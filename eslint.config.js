// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-config-prettier");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      prettier
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      "@typescript-eslint/no-explicit-any": "error",
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'keyword-spacing': 'error',
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always']
    },
  },
  {
    files: ["**/*.html"],
    rules: {},
  }
);
