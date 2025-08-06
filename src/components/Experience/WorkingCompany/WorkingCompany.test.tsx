import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import WorkingCompany from '@/components/Experience/WorkingCompany/WorkingCompany'

describe('Experience', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('WorkingCompany component', () => {
      test('matches the snapshot', () => {
        const { container } = render(
          <WorkingCompany
            experience={{
              company: 'some-company',
              period: 'some-period',
              position: 'some-position',
              responsabilities: 'some-resp',
            }}
          />
        )

        expect(container).toMatchSnapshot()
      })
    })
  })
})
