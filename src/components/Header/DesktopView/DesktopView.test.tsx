/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import DesktopView from '@/components/Header/DesktopView/DesktopView'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))
describe('DesktopView component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<DesktopView />)

    expect(container).toMatchSnapshot()
  })
})
