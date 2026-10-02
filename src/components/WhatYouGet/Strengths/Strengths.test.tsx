import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import Strengths from '@/components/WhatYouGet/Strengths/Strengths'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Strengths', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  describe('Strengths component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<Strengths />)

      expect(container).toMatchSnapshot()
    })
  })
})
