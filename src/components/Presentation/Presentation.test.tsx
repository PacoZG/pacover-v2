import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Presentation from '@/components/Presentation/index'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Presentation', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  describe('Presentation component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<Presentation />)

      expect(container).toMatchSnapshot()
    })
  })
})
