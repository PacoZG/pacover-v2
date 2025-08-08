import React from 'react'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import WorkingCompany, {
  WorkingCompanyProps,
} from '@/components/Experience/WorkingCompany/WorkingCompany'

describe('Experience', () => {
  describe('given configured with dependencies', () => {
    beforeEach(() => {
      window.scrollTo = vi.fn()

      vi.mock('next-intl', () => ({
        useTranslations: () => (key: string) => key,
      }))
    })

    describe('when called', () => {
      let workingCompanyPropMock: WorkingCompanyProps

      describe('WorkingCompany component', () => {
        workingCompanyPropMock = {
          experience: {
            company: 'Various Restaurants and Hotels',
            position: 'Waiter, Front Desk & Kitchen Staff',
            'period': 'JANUARY 2007 - AUGUST 2020',
            responsabilities:
              'Performed varied roles including waiter supervisor, cook, and dishwasher.\nDeveloped strong communication and customer service skills through direct interaction and understanding of customer needs.',
          },
        }

        it('matches the snapshot with no link', () => {
          const { container } = render(
            <WorkingCompany experience={workingCompanyPropMock.experience} />
          )

          expect(container).toMatchSnapshot()
        })
      })

      describe('WorkingCompany component', () => {
        workingCompanyPropMock = {
          experience: {
            company: 'Various Restaurants and Hotels',
            position: 'Waiter, Front Desk & Kitchen Staff',
            'period': 'JANUARY 2007 - AUGUST 2020',
            responsabilities:
              'Performed varied roles including waiter supervisor, cook, and dishwasher.',
          },
          link: 'http://some-link',
        }

        it('matches the snapshot with a link', () => {
          const { container } = render(
            <WorkingCompany
              experience={workingCompanyPropMock.experience}
              link={workingCompanyPropMock.link}
            />
          )

          expect(container).toMatchSnapshot()
        })
      })
    })
  })
})
