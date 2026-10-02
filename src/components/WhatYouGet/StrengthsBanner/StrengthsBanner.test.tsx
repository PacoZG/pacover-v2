import React from 'react'
import { render } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import StrengthsBanner from '@/components/WhatYouGet/StrengthsBanner/StrengthsBanner'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('StrengthsBanner', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  describe('StrengthsBanner component', () => {
    test('matches the snapshot', () => {
      const DummyIcon = () => <svg data-testid="dummy-icon" />

      const { container } = render(
        <StrengthsBanner StrengthsIcon={DummyIcon} translationKey={''} />
      )

      expect(container).toMatchSnapshot()
    })
  })
})
