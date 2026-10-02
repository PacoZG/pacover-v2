/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Contact from '@/components/Contact/index'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Contact', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('Contact component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Contact />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
