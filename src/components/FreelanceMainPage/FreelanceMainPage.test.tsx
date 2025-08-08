import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import FreelanceMainPage from './FreelanceMainPage'
import '@testing-library/jest-dom'

describe('Freelance', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('FreelanceMainPage', () => {
      describe('When called', () => {
        describe('takes a snapshot', () => {
          it('matches the snapshot', () => {
            const { container } = render(<FreelanceMainPage />)
            expect(container).toMatchSnapshot()
          })
        })

        describe('clicks the first button', () => {
          it('shows arrow when hero CTA is clicked', () => {
            render(<FreelanceMainPage />)
            const heroButton = screen.getByTestId('hero-link')
            fireEvent.click(heroButton)

            expect(screen.getByTestId('arrow-down')).toBeInTheDocument()
          })
        })

        describe('clicks the second button', () => {
          it('shows arrow when hero CTA is clicked', () => {
            render(<FreelanceMainPage />)
            const heroButton = screen.getByTestId('action-link')
            fireEvent.click(heroButton)

            expect(screen.getByTestId('arrow-down')).toBeInTheDocument()
          })
        })
      })
    })
  })
})
