import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Experience from '@/components/Experience/index'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))

describe('Experience component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Experience />)

    expect(container).toMatchSnapshot()
  })
})
