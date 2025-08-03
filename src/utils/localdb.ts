const isBrowser = typeof window !== 'undefined'

const setTheme = (theme: string) => {
  if (isBrowser) {
    localStorage.setItem('usersTheme', JSON.stringify(theme))
  }
}

const getTheme = () => {
  if (isBrowser) {
    const stored = localStorage.getItem('usersTheme')
    return stored ? JSON.parse(stored) : null
  }
  return null
}

const setLanguage = (lang: string) => {
  if (isBrowser) {
    localStorage.setItem('usersLanguage', JSON.stringify(lang))
  }
}

const getLanguage = () => {
  if (isBrowser) {
    const stored = localStorage.getItem('usersLanguage')
    return stored ? JSON.parse(stored) : null
  }
  return null
}

export { setTheme, getTheme, setLanguage, getLanguage }
