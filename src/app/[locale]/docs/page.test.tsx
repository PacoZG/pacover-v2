import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import ProjectOverviewPage from '@/app/[locale]/docs/page'

describe('ProjectOverviewPage', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('Project overview page component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<ProjectOverviewPage />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
