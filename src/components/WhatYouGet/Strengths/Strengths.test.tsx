import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import Strengths from '@/components/WhatYouGet/Strengths/Strengths'

describe('Strengths', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()

    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))
  })

  describe('Strengths component', () => {
    test('matches the snapshot', () => {
      const { container } = render(<Strengths />)

      expect(container).toMatchSnapshot()
    })
  })
})
