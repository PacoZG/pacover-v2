import React from 'react'
import { useTranslations } from 'next-intl'

const WhoIAm: React.FC = () => {
  const t = useTranslations('Presentation')

  return (
    <div className="flex justify-center p-3 md:p-10">
      <div className="flex flex-col items-center sm:flex-row justify-center w-full sm:w-11/12 lg:w-2/3 bg-gray-600 dark:bg-gray-900 transition duration-500 bg-opacity-70 dark:bg-opacity-70 rounded-xl p-4">
        <img
          className="h-96 sm:h-80 md:h-96 lg:w-80 border-0 rounded-lg shadow-lg transition duration-500 object-cover"
          src="https://res.cloudinary.com/dbn5gpgi5/image/upload/q_auto/v1653152856/CV%20Pics/idyfixrp3nzidjjezeuc.jpg"
          alt="Profile of Francisco Zavala Gonzalez"
        />
        <div className="p-4 md:p-6 w-full lg:w-3/4 text-left lg:text-left xl:text-left">
          <h1 className="text-3xl text-black dark:text-gray-300 transition duration-500 mb-2 font-extrabold">
            {t('line0')}
            <span className="text-blue-800 dark:text-blue-300 ml-2">
              FRANCISCO ZAVALA GONZALEZ
            </span>
          </h1>

          <p className="text-xl text-black dark:text-gray-300 transition duration-500 mb-4">
            Full Stack Developer
          </p>

          <p className="text-lg text-black dark:text-gray-300 transition duration-500 mb-2 leading-relaxed">
            {t('line1')}
          </p>

          <p className="text-lg text-black dark:text-gray-300 transition duration-500 leading-relaxed">
            {t('line2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoIAm
