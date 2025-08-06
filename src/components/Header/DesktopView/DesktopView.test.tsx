import React from 'react'
import { render } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import DesktopView from './DesktopView'

describe('Desktop', () => {
  describe('given configured with dependencies', () => {
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

    describe('<DesktopView />', () => {
      it('matches snapshot', () => {
        const { container } = render(<DesktopView />)
        expect(container).toMatchSnapshot()
      })
    })
  })
})
// Mocks
