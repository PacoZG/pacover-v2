import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import ProjectOverviewPage from '@/app/docs/page'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('ProjectOverviewPage', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('Project overview page component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<ProjectOverviewPage />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
