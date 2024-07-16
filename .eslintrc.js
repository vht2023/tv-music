module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  settings: {
    // to support @/ path
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    files: ['*.ts', '*.tsx', '*.js', '*.mdx', '*.md'], // files extensions required for linting
    // project: './tsconfig.json', // tells parser the relative path of tsconfig.json
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // all plugins (eslint-plugin-xxx) go here:
  plugins: ['@typescript-eslint', '@next/eslint-plugin-next'],

  // all configs (eslint-config-xxx) go here:
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@next/eslint-plugin-next/recommended',
    'plugin:import/typescript',
    'prettier',
    'next',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],

  rules: {
    '@typescript-eslint/restrict-plus-operands': 'off',
    'mdx/no-unused-expressions': 'off',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    'no-empty': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    '@typescript-eslint/indent': 'off',
    'operator-linebreak': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/quotes': 'off',
    'linebreak-style': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'mdx/no-unescaped-entities': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    'react/destructuring-assignment': 'off',
    'no-void': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/require-await': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.ts', '.tsx', '.jsx', '.md', '.mdx']}],
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
