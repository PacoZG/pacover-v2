import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import WorkingExperience from '@/components/Experience/WorkingExperience/WorkingExperience'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Experience', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()
    })

    describe('WorkingExperience component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<WorkingExperience />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
