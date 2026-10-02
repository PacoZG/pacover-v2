import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import MobileView from '@/components/Toggle/MobileView/MobileView'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('MobileView', () => {
  describe('MobileView component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<MobileView />)

      expect(container).toMatchSnapshot()
    })
  })
})
