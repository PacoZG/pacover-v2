'use client'

import { Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const Strengths: React.FC = () => {
  const t = useTranslations('strengths')
  const [stgr1, setStgr1] = useState<boolean>(false)
  const [stgr2, setStgr2] = useState<boolean>(false)
  const [stgr3, setStgr3] = useState<boolean>(false)
  const [stgr4, setStgr4] = useState<boolean>(false)

  return (
    <div className="bg-gray-400 dark:bg-gray-900 flex flex-col items-center p-4 md:py-10 lg:py-20 transition duration-500 rounded-b-xl bg-opacity-70 dark:bg-opacity-70">
      <div className="w-full sm:w-11/12 lg:w-2/3">
        <div className="accordion-card">
          <button
            className="flex items-center justify-between w-full p-0"
            onClick={() => setStgr1(!stgr1)}
          >
            <p className="accordion-title">{t('strength1')}</p>

            <div
              className={
                stgr1
                  ? 'transition duration-300 transform rotate-90 '
                  : 'transition duration-300'
              }
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />{' '}
              {/* Icon color adjusted */}
            </div>
          </button>

          <Transition
            show={stgr1}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="accordion-content">
              {t('line1_1')}
              <a
                className="accordion-link"
                href="https://fullstackopen.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('line1_2')}
              </a>
              {t('line1_3')}
            </div>
          </Transition>
        </div>

        <div className="accordion-card">
          <button
            className="flex items-center justify-between w-full p-0"
            onClick={() => setStgr2(!stgr2)}
          >
            <p className="accordion-title">{t('strength2')}</p>

            <div
              className={
                stgr2
                  ? 'transition duration-300 transform rotate-90 '
                  : 'transition duration-300'
              }
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </div>
          </button>

          <Transition
            show={stgr2}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="accordion-content">{t('line2')}</p>
          </Transition>
        </div>

        <div className="accordion-card">
          <button
            className="flex items-center justify-between w-full p-0"
            onClick={() => setStgr3(!stgr3)}
          >
            <p className="accordion-title">{t('strength3')}</p>

            <div
              className={
                stgr3
                  ? 'transition duration-300 transform rotate-90 '
                  : 'transition duration-300'
              }
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </div>
          </button>

          <Transition
            show={stgr3}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="accordion-content">{t('line3')}</p>
          </Transition>
        </div>

        <div className="accordion-card">
          <button
            className="flex items-center justify-between w-full p-0"
            onClick={() => setStgr4(!stgr4)}
          >
            <p className="accordion-title">
              HIGH{' '}
              <span className="border-2 border-yellow-300 p-1 rounded-md">
                5
              </span>{' '}
              TEST
            </p>

            <div
              className={
                stgr4
                  ? 'transition duration-300 transform rotate-90 '
                  : 'transition duration-300'
              }
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-500 dark:text-blue-300" />
            </div>
          </button>

          <Transition
            show={stgr4}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="accordion-content">
              {t('line4_1')}
              <a
                className="accordion-link"
                href="https://test.high5test.com/test/7d00f98d-6f29-4022-8d7f-33b23b454cd6"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('line4_2')}
              </a>
              {t('line4_3')}
            </p>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default Strengths
