'use client'
import {
  LanguageIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import './skill-style.css'
import {
  AwsLogo,
  Css,
  Cypress,
  DockerLogo,
  Java,
  Redux,
  SQLLogo,
  TailwindCss,
  Typescript,
} from '@/components/icons'
import { useTranslations } from 'next-intl'

const Skills = () => {
  const t = useTranslations('skills')

  return (
    <div className="flex flex-col items-center p-4 md:py-10 lg:py-20">
      <div className="bg-gray-600 dark:bg-gray-900 flex flex-col items-center w-full sm:w-11/12 lg:w-2/3 transition duration-500 rounded-xl bg-opacity-70 dark:bg-opacity-70 p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-1 sm:gap-2 md:gap-4 lg:gap-6 py-5 w-full border-b-2 border-gray-300 dark:border-gray-700">
          {/* Javascript */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/nolan/600/javascript.png"
              alt="Javascript Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-yellow-400">Javascript</p>
          </a>

          {/* React */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/officel/80/000000/react.png"
              alt="React Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-blue-300">React</p>
          </a>

          {/* Redux */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Redux className="skill-logo" />
            <p className="skill-text dark:text-purple-400">Redux</p>
          </a>

          {/* GraphQL */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117640/ak5pcxrhwyigv9z0nqql.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/48/000000/graphql.png"
              alt="GraphQL Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-pink-500">GraphQL</p>
          </a>

          {/* React-Native */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117641/ffbedqhkfwmbaitpjrwx.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/nolan/600/react-native.png"
              alt="React-Native Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-pink-700">React-Native</p>
          </a>

          {/* Typescript - CHANGED SOURCE */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typescript className="skill-logo object-contain" />
            <p className="skill-text dark:text-blue-500">Typescript</p>
          </a>

          {/* HTML */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/344/html-5--v1.png"
              alt="HTML Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-orange-500">HTML</p>
          </div>

          {/* CSS */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Css className="skill-logo" />
            <p className="skill-text dark:text-blue-600">CSS</p>
          </div>

          {/* MongoDB */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo object-contain"
              src="https://img.icons8.com/color/600/000000/mongodb.png"
              alt="MongoDB Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-green-400">MongoDB</p>
          </a>

          {/* Node.js */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo bg-green-400 p-3 object-contain"
              src="https://img.icons8.com/color/600/000000/nodejs.png"
              alt="Node.js Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-lime-500">Node.js</p>
          </a>

          {/* SQL */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res-cloudinary-com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SQLLogo className="skill-logo" />
            <p className="skill-text dark:text-blue-400">SQL</p>
          </a>

          {/* Java */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Java className="skill-logo" />
            <div className="flex gap-2 text-xs sm:text-sm pt-1">
              <a
                skill-tool-tip-msg="Java Programming I"
                className="skill-cert-link"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118753/rtibuwlmtzmdtr35u2gw.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cert I
              </a>

              <a
                skill-tool-tip-msg="Java Programming II"
                className="skill-cert-link"
                href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118770/v7jfhsjvhla0pyw1p1dr.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cert II
              </a>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <TailwindCss className="skill-logo object-contain" />

            <p className="skill-text dark:text-cyan-400">Tailwindcss</p>
          </div>

          {/* Cypress.io */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Cypress className="skill-logo" />
            <p className="skill-text dark:text-gray-200">Cypress.io</p>
          </a>

          {/* Docker */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DockerLogo className="skill-logo bg-transparent" />
            <p className="skill-text dark:text-blue-500">Docker</p>
          </a>

          {/* Kubernetes */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <Image
              className="skill-logo"
              src="https://img.icons8.com/color/600/000000/kubernetes.png"
              alt="Kubernetes Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-blue-500">Kubernetes</p>
          </div>

          {/* AWSLogo */}
          <div className="skill-card bg-gray-300 dark:bg-gray-800">
            <AwsLogo className="skill-logo" />
            <p className="skill-text dark:text-orange-400">AWS</p>
          </div>

          {/* Datadog */}
          <a
            skill-tool-tip-msg={t('click-for-certificate')}
            className="skill-card bg-gray-300 dark:bg-gray-800"
            href="https://datadog.docebosaas.com/share/v1/gamification/assigned_badge/942dde0a-211f-4e54-b9ea-fe148117eec0/shared?lang=en&t=1689281055089"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="skill-logo"
              src="https://cdn5.dcbstatic.com/files/d/a/datadog_docebosaas_com/assets/badges/original/6149e0bf43bb02e0d6e207efd297a00ce5ac4443.png"
              alt="Datadog Logo"
              width={600}
              height={600}
            />
            <p className="skill-text dark:text-green-500">Datadog</p>
          </a>
        </div>

        <p className="text-center pt-4 text-gray-700 dark:text-gray-400 text-xs sm:text-sm uppercase transition duration-500 w-full sm:w-11/12 lg:w-2/3">
          {t('info-click')}
        </p>
      </div>

      {/* Strengths/Languages Section */}
      {/* THIS IS THE REDESIGNED SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 xl:gap-10 pt-8 w-full sm:w-11/12 lg:w-2/3">
        {/* Multitask */}
        <div className="strengths-banner">
          <PuzzlePieceIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 mr-2 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500 flex-grow">
            {t('multitask')}
          </p>
        </div>

        {/* Engaged */}
        <div className="strengths-banner">
          <LightBulbIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 mr-2 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500 flex-grow">
            {t('engaged')}
          </p>
        </div>

        {/* Lang1 */}
        <div className="strengths-banner">
          <LanguageIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 mr-2 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500 flex-grow">
            {t('lang1')}
          </p>
        </div>

        {/* Lang2 */}
        <div className="strengths-banner">
          <LanguageIcon className="w-6 h-6 text-blue-600 dark:text-blue-300 mr-2 flex-shrink-0" />
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base uppercase transition duration-500 flex-grow">
            {t('lang2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
