import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import FreelanceMainPage from './FreelanceMainPage'

describe('Freelance', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('FreelanceMainPage', () => {
      test('matches the snapshot', () => {
        const { container } = render(<FreelanceMainPage />)

        expect(container).toMatchSnapshot()
      })
    })
  })
})
