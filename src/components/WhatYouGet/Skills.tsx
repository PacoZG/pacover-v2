'use client'
import React from 'react'
import './skill-style.css'
import { useTranslations } from 'next-intl'
import IconImage from '@/components/WhatYouGet/IconImage/IconImage'
import { technologies } from '@/components/WhatYouGet/resources/technologies'
import { strengthsList } from '@/components/WhatYouGet/resources/strengthsList'

const Skills = () => {
  const t = useTranslations('skills')

  return (
    <div className="flex flex-col items-center p-4 md:py-10 lg:py-20">
      <div className="bg-gray-600 dark:bg-gray-900 flex flex-col items-center w-full sm:w-11/12 lg:w-2/3 transition duration-500 rounded-xl bg-opacity-70 dark:bg-opacity-70 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-2 md:gap-4 lg:gap-6 py-5 w-full border-b-2 border-gray-300 dark:border-gray-700">
          {technologies.map((tech, i) => {
            return (
              <IconImage
                key={i}
                name={tech.name}
                imageUrl={tech.imageUrl}
                certUrl={tech.certUrl}
                altName={tech.altName}
                darkThemeTextColour={tech.darkThemeTextColour}
                IconComponent={tech.IconComponent}
                skillToolTipMsg={tech.skillToolTipMsg}
                imageExtraStyle={tech.imageExtraStyle}
              />
            )
          })}
        </div>

        <p className="text-center pt-4 text-gray-700 dark:text-gray-400 text-xs sm:text-sm uppercase transition duration-500 w-full sm:w-11/12 lg:w-2/3">
          {t('info-click')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:gap-10 pt-8 w-full sm:w-11/12 lg:w-2/3">
        {strengthsList.map(({ strengthIcon: Icon, translationText }) => (
          <div className="strengths-banner" key={translationText}>
            <Icon className="strengths-icon" />

            <span className="strengths-text">{t(`${translationText}`)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
