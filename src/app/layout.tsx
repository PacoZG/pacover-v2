/* istanbul ignore file */
import React from 'react'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const messages = await getMessages()
  const locale = await getLocale()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="App">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
