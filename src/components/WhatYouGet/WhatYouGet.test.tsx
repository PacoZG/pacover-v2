/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import WhatYouGet from '@/components/WhatYouGet/index'

window.scrollTo = vi.fn()

vi.mock('next-intl', () => ({
  useTranslations: () => {
    return key => {
      return key
    }
  },
}))

describe('WhatYouGet component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<WhatYouGet />)

    expect(container).toMatchSnapshot()
  })
})
