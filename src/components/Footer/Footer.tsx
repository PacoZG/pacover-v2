// src/components/Footer/tsx
'use client' // Correctly marked as client component

import React, { useEffect, useState } from 'react' // Import useState and useEffect
import { AtSymbolIcon } from '@heroicons/react/24/outline'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share'
import Contact from '@/components/Contact'
import { useTranslations } from 'next-intl'

const Footer: React.FC = () => {
  const t = useTranslations('Footer')

  // 1. Create state to hold the current URL
  const [currentUrl, setCurrentUrl] = useState('')

  // 2. Use useEffect to set the URL once the component mounts on the client
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  return (
    <div
      className="relative flex justify-center inset-x-0 bottom-0 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 transition duration-500 w-full shadow-lg py-8 md:py-10"
      id="contact-form"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-evenly w-full sm:w-11/12 lg:w-9/12 gap-8 md:gap-10 lg:gap-14">
        <Contact />

        <div className="flex flex-col items-center sm:items-start gap-6 sm:pt-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase">
              {t('developed-by')}
            </p>

            <a
              href="https://www.linkedin.com/in/francisco-zavala"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-lg flex items-center gap-2"
            >
              <LinkedinIcon size={24} round={true} />

              <p className="text-gray-700 dark:text-gray-400 text-lg">
                Francisco Zavala
              </p>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <AtSymbolIcon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              contact@pacoderzavala.com
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold uppercase">
              {t('share-cv')}
            </p>

            <div className="flex items-center justify-center gap-4">
              <FacebookShareButton
                url={currentUrl}
                className="focus-within:outline-none"
              >
                <FacebookIcon size={28} round={true} />
              </FacebookShareButton>

              <LinkedinShareButton
                url={currentUrl}
                className="focus-within:outline-none"
              >
                <LinkedinIcon size={28} round={true} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
