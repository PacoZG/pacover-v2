import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import WhoIAm from '@/components/Presentation/WhoAmI/WhoIAm'

describe('Health', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('WhoIAm component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<WhoIAm />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
