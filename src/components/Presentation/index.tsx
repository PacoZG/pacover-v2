'use client'

import React, { useEffect } from 'react'
import WhoIAm from '@/components/Presentation/WhoIAm'
import Education from '@/components/Presentation/Education'
import { useTranslations } from 'next-intl'

const Presentation: React.FC = () => {
  const t = useTranslations('stickers')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-layout bg-gray-200 dark:bg-gray-900 transition duration-500">
      <div className="flex justify-center w-full py-8">
        <h1 className="sticky-header rounded-t-xl">{t('who')}</h1>
      </div>

      <WhoIAm />

      <div className="flex justify-center w-full py-8">
        <h1 className="sticky-header">{t('education')}</h1>
      </div>

      <Education />
    </div>
  )
}

export default Presentation
