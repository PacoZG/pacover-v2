/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Header from '@/components/Header/index'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))
describe('Header component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })
})
