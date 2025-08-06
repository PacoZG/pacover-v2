/* eslint-disabled */
import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import IconImage from '@/components/WhatYouGet/IconImage/IconImage'

describe('IconImage', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('IconImage component', () => {
      test('matches the snapshot', () => {
        const { container } = render(
          <IconImage
            certUrl="http://some-cert-url"
            imageUrl="http://some-image-url"
            altName="some-logo"
            imageExtraStyle="some-extra-style"
            darkThemeTextColour="some-dark-theme-colour"
            skillToolTipMsg={true}
            name={'some-name'}
          />
        )

        expect(container).toMatchSnapshot()
      })
    })
  })
})
