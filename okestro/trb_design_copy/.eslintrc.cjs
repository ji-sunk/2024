module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    "prettier",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '!./.storybook/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', '@tanstack/query'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'react-refresh/only-export-components': "off",
    "react-hooks/exhaustive-deps": [
      "off",
      {
        "additionalHooks": "(useColorMode)"
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [
    {
      files: ['src/ui/components/editor/**/*.ts', 'src/ui/components/editor/**/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
}
