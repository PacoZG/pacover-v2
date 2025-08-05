import React from 'react'
import { useTranslations } from 'next-intl'

type StrengthsBannerProps = {
  StrengthsIcon: React.ElementType
  translationKey: string
}

const StrengthsBanner: React.FC<StrengthsBannerProps> = ({ StrengthsIcon, translationKey }) => {
  const t = useTranslations('skills')

  return (
    <div className="strengths-banner">
      <StrengthsIcon />
      <p className="strengths-text">{t(translationKey)}</p>
    </div>
  )
}

export default StrengthsBanner
