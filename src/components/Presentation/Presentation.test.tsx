import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Presentation from '@/components/Presentation/index'

describe('Presentation', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()

    vi.mock('next-intl', () => ({
      useTranslations: () => {
        return key => {
          return key
        }
      },
    }))
  })

  describe('Presentation component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<Presentation />)

      expect(container).toMatchSnapshot()
    })
  })
})
