'use client'

import { useEffect, useState } from 'react'
import { useRouter } from '@/i18n/navigation'
import { getLanguage, setLanguage } from '@/utils/localdb'

type Language = 'en' | 'es'

interface LanguageModelReturn {
  usersLanguage: string
  handleUsersLanguage: () => void
}

export const LanguageModel = (): LanguageModelReturn => {
  const router = useRouter()

  const [usersLanguage, setUsersLanguage] = useState<string>('en')

  useEffect(() => {
    const storedLanguage = getLanguage() // From localStorage

    if (storedLanguage) {
      setUsersLanguage(storedLanguage)

      return
    }

    const defaultBrowserLanguage: string =
      navigator.language || navigator.languages?.[0] || 'en-US'
    const languageCode = defaultBrowserLanguage.split('-')[0]
    const detectedLanguage: Language = languageCode === 'es' ? 'es' : 'en'

    setLanguage(detectedLanguage) // Persists to localStorage + 'locale' cookie
    setUsersLanguage(detectedLanguage)
    router.refresh() // Re-render server components with the detected locale
  }, [router]) // Runs once on mount

  const handleUsersLanguage = () => {
    const newLanguage: Language = usersLanguage === 'en' ? 'es' : 'en'
    setLanguage(newLanguage) // Update localStorage + 'locale' cookie
    setUsersLanguage(newLanguage) // Update local state

    router.refresh() // Re-render server components (layout) with new locale
  }

  return { usersLanguage, handleUsersLanguage }
}
