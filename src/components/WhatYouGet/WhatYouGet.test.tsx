/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import WhatYouGet from '@/components/WhatYouGet/index'

describe('WhatYouGet', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('WhatYouGet component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<WhatYouGet />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
