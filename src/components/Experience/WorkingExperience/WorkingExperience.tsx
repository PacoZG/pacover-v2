import React from 'react'
import { useTranslations } from 'next-intl'
import WorkingCompany from '@/components/Experience/WorkingCompany/WorkingCompany'

const WorkingExperience: React.FC = () => {
  const t = useTranslations('experience')

  const getWorkingCompany: (num: number) => {
    company: string,
    period: string,
    position: string,
    responsabilities: string,
  } = (num: number) => {
    const experience = {
      company: t(`company${num}`),
      period: t(`period${num}`),
      position: t(`position${num}`),
      responsabilities: t(`responsabilities${num}`),
    }

    return experience
  }

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-400 dark:bg-gray-900 rounded-b-xl p-4 py-10 md:py-14 lg:py-16 transition duration-500 bg-opacity-70 dark:bg-opacity-70 min-h-auto">
      <WorkingCompany
        experience={getWorkingCompany(4)}
        link="https://houston-inc.com/"
      />

      <WorkingCompany
        experience={getWorkingCompany(3)}
        link="https://www.hotelkamp.com/en/"
      />

      <WorkingCompany experience={getWorkingCompany(2)} />

      <WorkingCompany experience={getWorkingCompany(1)} />
    </div>
  )
}

export default WorkingExperience
