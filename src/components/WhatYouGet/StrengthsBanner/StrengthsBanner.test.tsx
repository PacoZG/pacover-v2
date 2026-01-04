import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import StrengthsBanner from '@/components/WhatYouGet/StrengthsBanner/StrengthsBanner'

describe('StrengthsBanner', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()

    vi.mock('next-intl', () => ({
      useTranslations: () => (key: string) => key,
    }))
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
