import React from 'react'
import { fireEvent, render, waitFor, within } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import Footer from '@/components/Footer/Footer'

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}))

describe('Footer', () => {
  describe('given configured with dependencies', () => {
    describe('Footer component', () => {
      test('matches the snapshot', () => {
        const { container } = render(<Footer />)

        expect(container).toMatchSnapshot()
      })

      test.each([
        '/cv/presentation',
        '/?redirect=https://attacker.example#https://attacker.example',
      ])('shares the canonical site URL from %s', async location => {
        const originalUrl = window.location.href
        const openWindow = vi.spyOn(window, 'open').mockReturnValue(null)

        try {
          window.history.replaceState(null, '', location)
          const { container } = render(<Footer />)

          fireEvent.click(
            within(container).getByRole('button', { name: 'Share on Facebook' })
          )
          fireEvent.click(
            within(container).getByRole('button', { name: 'Share on LinkedIn' })
          )

          await waitFor(() => expect(openWindow).toHaveBeenCalledTimes(2))
          const sharedUrls = openWindow.mock.calls.map(([url]) => {
            const shareUrl = new URL(String(url))
            return (
              shareUrl.searchParams.get('u') ?? shareUrl.searchParams.get('url')
            )
          })
          expect(sharedUrls).toEqual([
            'https://www.pacoderzavala.com',
            'https://www.pacoderzavala.com',
          ])
        } finally {
          window.history.replaceState(null, '', originalUrl)
          openWindow.mockRestore()
        }
      })
    })
  })
})
