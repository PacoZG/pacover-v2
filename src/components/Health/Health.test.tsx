import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Health from '@/components/Health/Health'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Health', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('Health component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Health />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
