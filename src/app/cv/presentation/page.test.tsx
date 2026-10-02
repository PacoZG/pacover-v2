import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import PresentationPage from '@/app/cv/presentation/page'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Presentation Page', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('Presentation Page component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<PresentationPage />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
