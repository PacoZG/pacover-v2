import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Page from '@/app/cv/skills_strenghts/page'

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
        const { container } = render(<Page />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
