module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-var': 2,
    'sort-vars': 2,
    'newline-before-return': 2,
    'no-else-return': 2,
    'no-console': [
      2,
      {
        allow: ['warn', 'error', 'info']
      }
    ],
    'no-empty': 2,
    'no-empty-function': 2,
    'no-extra-semi': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'prefer-const': 2,
    'object-shorthand': 2,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        semi: true,
        tabWidth: 2,
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: true,
        printWidth: 120,
        endOfLine: 'auto'
      }
    ],
    'comma-dangle': ['error', 'never']
  },
  overrides: [
    {
      files: ['**/*.tsx']
    }
  ],
  plugins: ['prettier']
};
