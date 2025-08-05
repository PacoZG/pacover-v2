import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Health from '@/components/Health/Health'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))
describe('Health component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Health />)

    expect(container).toMatchSnapshot()
  })
})
