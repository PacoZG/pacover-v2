import React from 'react'
import { useTranslations } from 'next-intl'
import '../experience-style.css'

interface Experience {
  company: string
  period: string
  position: string
  responsabilities: string
}

interface WorkingCompanyProps {
  experience: Experience
  link?: string
}

const WorkingCompany: React.FC<WorkingCompanyProps> = ({ experience, link }) => {
  const t = useTranslations('experience')

  const getProcessedResponsibilities = (responsibilitiesContent: string) => {
    if (typeof responsibilitiesContent === 'string') {

      const lines: string[] = responsibilitiesContent.split('\n').filter(line => line.trim() !== '')

      return (
        <ul className="list-disc list-inside space-y-1">
          {lines.map((item, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-400">
              {item.trim()}
            </li>
          ))}
        </ul>
      )
    }

    return <p className="text-gray-700 dark:text-gray-400">{responsibilitiesContent}</p>
  }

  return (
    <div key={experience.company} className="experience-card">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="experience-card-title">
            {link && (
              <a
                experience-tool-tip-msg={t('tool-tip-msg')}
                className="experience-card-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            )}
            {!link && experience.company}
          </h1>

          <div className="experience-card-period">{experience.period}</div>
        </div>

        <div className="experience-card-position">{experience.position}</div>
      </div>

      <div className="experience-card-responsibilities">
        {getProcessedResponsibilities(experience.responsabilities)}
      </div>
    </div>
  )
}

export default WorkingCompany
