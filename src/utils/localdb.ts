/* istanbul ignore file */

const setTheme: (theme: string) => void = (theme: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('usersTheme', JSON.stringify(theme))
  }
}

const getTheme: () => any | null = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('usersTheme')

    return (stored && JSON.parse(stored)) || null
  }

  return null
}

const setLanguage = (lang: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('usersLanguage', JSON.stringify(lang))
    // 'locale' cookie is read server-side (src/i18n/request.ts) to pick the
    // locale/messages for the next server render — no URL segment needed.
    document.cookie = `locale=${lang}; path=/; max-age=31536000; samesite=lax`
  }
}

const getLanguage = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('usersLanguage')

    return (stored && JSON.parse(stored)) || null
  }

  return null
}

export { setTheme, getTheme, setLanguage, getLanguage }
