import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Footer from '@/components/Footer/Footer'

describe('Footer', () => {
  describe('given configured with dependencies', () => {
    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))

    describe('Footer component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Footer />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
