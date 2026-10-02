/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import HealthPage from '@/app/health/Page'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Health Page', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('Health Page component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<HealthPage />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
