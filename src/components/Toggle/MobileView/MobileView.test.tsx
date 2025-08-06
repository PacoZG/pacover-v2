import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import MobileView from '@/components/Toggle/MobileView/MobileView'

describe('MobileView', () => {
  beforeEach(() => {
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
