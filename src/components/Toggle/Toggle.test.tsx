import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Toggle from '@/components/Toggle/Toggle'

describe('Toggle', () => {
  beforeEach(() => {
    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))
  })

  describe('Toggle component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<Toggle />)

      expect(container).toMatchSnapshot()
    })
  })
})
