import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Experience from '@/components/Experience/index'

describe('Experience', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('Experience component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Experience />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
