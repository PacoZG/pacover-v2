import React from 'react'
import { useTranslations } from 'next-intl'
import '../education-style.css'

const Education: React.FC = () => {
  const t = useTranslations('education')

  return (
    <div className="flex flex-col items-center p-4 md:py-10 lg:py-20">
      <div className="flex flex-col items-center bg-gray-600 dark:bg-gray-900 w-full sm:w-11/12 lg:w-2/3 transition duration-500 rounded-xl bg-opacity-70 p-4">
        <div className="education-card">
          <h1 className="education-card-title">
            <a
              className="education-link"
              href="https://devopswithkubernetes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('line12')}
            </a>
          </h1>

          <p className="education-card-description">{t('line11')}</p>
        </div>

        {/* Education Entry 2: DevOps with Docker */}
        <div className="education-card">
          <h1 className="education-card-title">
            <a
              className="education-link"
              href="https://devopswithdocker.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('line10')}
            </a>
          </h1>

          <p className="education-card-description">{t('line9')}</p>
        </div>

        {/* Education Entry 3: Full Stack Open */}
        <div className="education-card">
          <h1 className="education-card-title">
            <a
              className="education-link"
              href="https://fullstackopen.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('line8')}
            </a>
          </h1>

          <p className="education-card-description">{t('line7')}</p>
        </div>

        {/* Education Entry 4: Aalto University */}
        <div className="education-card">
          <h1 className="education-card-title">{t('line6')}</h1>

          <p className="education-card-description">{t('line5')}</p>

          <a
            education-tool-tip-msg={t('tool-tip-msg')}
            className="education-link-secondary"
            href="https://www.aalto.fi/en/school-of-electrical-engineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('line4')}
          </a>
        </div>

        {/* Education Entry 5: Technical University of Cartagena */}
        <div className="education-card">
          <h1 className="education-card-title">{t('line3')}</h1>
          <p className="education-card-description">{t('line2')}</p>
          <a
            education-tool-tip-msg={t('tool-tip-msg')}
            className="education-link-secondary"
            href="http://www.upct.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('line1')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education
