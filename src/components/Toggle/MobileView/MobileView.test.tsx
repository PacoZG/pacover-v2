import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Presentation from '@/components/Presentation/index'
import MobileView from '@/components/Toggle/MobileView/MobileView'

describe('MobileView', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()

    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))
  })

  describe('MobileView component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<MobileView />)

      expect(container).toMatchSnapshot()
    })
  })
})
