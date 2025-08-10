import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import ProjectOverview from '@/components/Documentation/ProjectOverview'

describe('ProjectOverview', () => {
  describe('given configured with dependencies', () => {
    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))

    describe('ProjectOverview component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<ProjectOverview />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
