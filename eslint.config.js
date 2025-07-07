// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
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
      "@typescript-eslint/no-explicit-any": "error",
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'keyword-spacing': 'error',
      'no-multi-spaces': 'error',
      'space-infix-ops': 'error',
      'no-trailing-spaces': 'error',
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'max-len': ['error', {
        'code': 100,
        'ignoreUrls': false,
        'ignoreStrings': false,
        'ignoreTemplateLiterals': true,
        'ignoreComments': false
      }]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
