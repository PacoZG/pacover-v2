import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import Header from '@/components/Header/index'

describe('Header', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))

      vi.mock('@/i18n/navigation', () => ({
        Link: ({ href, children, className }: any) => (
          <a href={href} className={className}>
            {children}
          </a>
        ),
      }))

      vi.mock('@/components/icons/Github', () => ({
        default: () => <div data-testid="github-icon" />,
      }))

      vi.mock('@/components/Toggle', () => ({
        default: () => <div data-testid="toggle" />,
      }))

      vi.mock('react-share', () => ({
        LinkedinIcon: () => <div data-testid="linkedin-icon" />,
        WhatsappIcon: () => <div data-testid="whatsapp-icon" />,
      }))

      vi.mock('@/utils/language/LanguageModel', () => ({
        LanguageModel: () => ({
          usersLanguage: 'en',
          handleUsersLanguage: vi.fn(),
        }),
      }))
    })
    // Mocks

    describe('<Header />', () => {
      it('matches snapshot', () => {
        const { container } = render(<Header />)
        expect(container).toMatchSnapshot()
      })
    })
  })
})
