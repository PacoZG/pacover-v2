'use client'
import React, { useEffect } from 'react'
import WorkingExperience from '@/components/Experience/WorkingExperience'
import { useTranslations } from 'next-intl'

const Experience: () => React.JSX.Element = () => {
  const t = useTranslations('stickers')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-layout">
      <div className="flex justify-center w-full py-8">
        <div className="sticky-header rounded-t-xl">{t('experience')}</div>
      </div>

      <WorkingExperience />
    </div>
  )
}

export default Experience
