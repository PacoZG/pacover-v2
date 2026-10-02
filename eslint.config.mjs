import { dirname } from 'path'
import { fileURLToPath } from 'url'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import nextBase from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const eslintConfig = [
  // eslint-config-next ships native flat-config arrays as of Next.js 16, so
  // they're spread directly rather than routed through FlatCompat (which
  // caused a circular-structure crash when double-wrapping flat configs).
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...nextBase,
  prettierConfig,
  {
    ignores: [
      '**/dist',
      '**/coverage',
      '**/vitest.config.mts',
      '**/.eslint.config.js',
      '**/public',
      '**/node_modules/**',
    ],
  },
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'no-console': 'warn',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'throw'],
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
    },
  },
]

export default eslintConfig
