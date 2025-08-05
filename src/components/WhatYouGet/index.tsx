'use client'

import React, { useEffect } from 'react'
import Skills from './Skills'
import Strengths from './Strengths'
import { useTranslations } from 'next-intl'

const WhatYouGet: React.FC = () => {
  const t = useTranslations('stickers')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-layout">
      <div className="flex justify-center w-full py-8">
        <div className="sticky-header rounded-t-xl">{t('skills')}</div>
      </div>

      <Skills />

      <div className="flex justify-center w-full py-8">
        <div className="sticky-header">{t('strengths')}</div>
      </div>

      <Strengths />
    </div>
  )
}

export default WhatYouGet
