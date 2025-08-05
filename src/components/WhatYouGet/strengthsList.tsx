import React from 'react'
import { LanguageIcon, LightBulbIcon } from '@heroicons/react/24/outline'

type StrengthsList = {
  strengthIcon: React.ComponentType<{ className?: string }>
  translationText: string
}

export const strengthsList: StrengthsList[] = [
  {
    strengthIcon: LightBulbIcon,
    translationText: 'multitask'
  },
  {
    strengthIcon: LightBulbIcon,
    translationText: 'engaged'
  },
  {
    strengthIcon: LanguageIcon,
    translationText: 'lang1'
  },
  {
    strengthIcon: LanguageIcon,
    translationText: 'lang2'
  }
]
