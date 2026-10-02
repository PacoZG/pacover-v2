import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import DesktopView from '@/components/Toggle/DesktopView/DesktopView'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('DesktopView', () => {
  describe('DesktopView component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<DesktopView />)

      expect(container).toMatchSnapshot()
    })
  })
})
