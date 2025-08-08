import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Page from '@/app/[locale]/cv/experience/page'

describe('Presentation Page', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('Presentation Page component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Page />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
