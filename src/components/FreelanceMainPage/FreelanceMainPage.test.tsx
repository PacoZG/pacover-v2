import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import FreelanceMainPage from './FreelanceMainPage'

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))

describe('FreelanceMainPage', () => {
  test('matches the snapshot', () => {
    const { container } = render(<FreelanceMainPage />)

    expect(container).toMatchSnapshot()
  })
})
