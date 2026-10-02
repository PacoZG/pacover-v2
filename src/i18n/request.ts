import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { cookies } from 'next/headers'

const locales = ['en', 'es']
const defaultLocale = 'en'

export default getRequestConfig(async () => {
  // Try to get locale from cookies, fallback to default
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('locale')?.value
  const locale = hasLocale(locales, cookieLocale) ? cookieLocale : defaultLocale

  return {
    locale,
    messages: (await import(`./messages/${locale}/translations.json`)).default,
  }
})
