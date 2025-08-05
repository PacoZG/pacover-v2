import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Footer from '@/components/Footer/Footer'

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))

describe('Footer component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })
})
