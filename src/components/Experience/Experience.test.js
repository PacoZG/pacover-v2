import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Experience from '.'
import i18n from '../../utils/language/i18next.test'

describe('Testing', () => {
  test('Snapshot of the Experience component', () => {
    const rederedHeader = renderer
      .create(
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Experience />
          </I18nextProvider>
        </BrowserRouter>
      )
      .toJSON()
    expect(rederedHeader).toMatchSnapshot()
  })
})
