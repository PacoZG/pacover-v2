import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Education from '@/components/Presentation/Education/Education'

describe('Health', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('Education component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Education />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
