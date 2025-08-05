/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import MobileView from '@/components/Header/MobileView/MobileView'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))
describe('MobileView component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<MobileView />)

    expect(container).toMatchSnapshot()
  })
})
