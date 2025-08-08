import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: ['default'],
    coverage: {
      enabled: false,
      provider: 'istanbul',
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        'coverage/**',
        'dist/**',
        '**/[.]**',
        'packages/*/test?(s)/**',
        '**/*.d.ts',
        '**/virtual:*',
        '**/__x00__*',
        '**/\x00*',
        'cypress/**',
        'test?(s)/**',
        'test?(-*).?(c|m)[jt]s?(x)',
        '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
        '**/__tests__/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/vitest.{workspace,projects}.[jt]s?(on)',
        '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
        'src/testing/**',
        'src/**/**/*.types.ts',
        'src/**/**/**/types/**',
        'src/**/**/**/enums/**',
        'src/i18n/**/**',
        'src/app/[locale]/layout',
        'src/utils/localdb',
      ],
    },
    cache: false,
  },
})
