import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import DesktopView from '@/components/Toggle/DesktopView/DesktopView'

describe('DesktopView', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()

    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))
  })

  describe('DesktopView component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<DesktopView />)

      expect(container).toMatchSnapshot()
    })
  })
})
