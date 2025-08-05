import React from 'react'
import { Css, Cypress, DockerLogo, Redux, TailwindCss, Typescript } from '@/components/icons'

type Technologies = {
  name: string
  certUrl?:string
  imageUrl?: string
  altName?: string
  imageExtraStyle?: string
  darkThemeTextColour: string
  IconComponent?: React.ReactNode
  skillToolTipMsg: boolean
}


export const technologies: Technologies[] = [
  {
    name: 'Javascript',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/nolan/600/javascript.png',
    altName: 'Javascript Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-yellow-300',
    skillToolTipMsg: true,
  },
  {
    name: 'React',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/officel/80/000000/react.png',
    altName: 'React Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-blue-300',
    skillToolTipMsg: true,
  },
  {
    name: 'Redux',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    altName: 'Javascript Logo',
    darkThemeTextColour: 'text-blue-300',
    skillToolTipMsg: true,
    IconComponent: <Redux className="skill-logo" />
  },
  {
    name: 'GraphQL',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/48/000000/graphql.png',
    altName: 'GraphQL Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-pink-500',
    skillToolTipMsg: true,
  },
  {
    name: 'React-Native',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: "https://img.icons8.com/nolan/600/react-native.png",
    altName: 'React-Native Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-pink-700',
    skillToolTipMsg: true,
  },
  {
    name: 'TypeScript',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png',
    imageUrl: 'https://img.icons8.com/nolan/600/javascript.png',
    altName: 'TypeScript Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-blue-500',
    skillToolTipMsg: true,
    IconComponent: <Typescript className="skill-logo object-contain" />
  },
  {
    name: 'Javascript',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/nolan/600/javascript.png',
    altName: 'Javascript Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'text-yellow-300',
    skillToolTipMsg: true,
  },
  {
    name: 'HTML',
    imageUrl: 'https://img.icons8.com/color/344/html-5--v1.png',
    altName: 'HTML Logo',
    darkThemeTextColour: 'text-yellow-600',
    skillToolTipMsg: false,
  },
  {
    name: 'CSS',
    IconComponent: <Css className="skill-logo" />,
    altName: 'CSS Logo',
    darkThemeTextColour: 'text-blue-600',
    skillToolTipMsg: false,
  },
  {
    name: 'MongoDB',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/600/000000/mongodb.png',
    altName: 'MongoDB Logo',
    darkThemeTextColour: 'text-green-400',
    skillToolTipMsg: true,
  },
  {
    name: 'Node.js',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/600/000000/nodejs.png',
    altName: 'Node.js Logo',
    imageExtraStyle: 'bg-green-400 p-3 object-contain',
    darkThemeTextColour: 'text-green-400',
    skillToolTipMsg: true,
  },
  {
    name: 'SQL',
    certUrl:
      'https://res-cloudinary-com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png',
    imageUrl: 'https://img.icons8.com/nolan/600/javascript.png',
    altName: 'SQL Logo',
    darkThemeTextColour: 'text-blue-400',
    skillToolTipMsg: true,
  },
  {
    name: 'Tailwindcss',
    altName: 'Tailwindcss Logo',
    darkThemeTextColour: 'text-blue-400',
    IconComponent: <TailwindCss className="skill-logo object-contain" />,
    skillToolTipMsg: false,
  },
  {
    name: 'Cypress.io',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    altName: 'Cypress.io Logo',
    darkThemeTextColour: 'text-gray-200',
    IconComponent: <Cypress className="skill-logo" />,
    skillToolTipMsg: true,
  },
  {
    name: 'Docker',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png',
    altName: 'Docker Logo',
    darkThemeTextColour: 'text-blue-500',
    IconComponent: <DockerLogo className="skill-logo bg-transparent" />,
    skillToolTipMsg: true,
  },
  {
    name: 'Kubernetes',
    // certUrl:
    //   'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/600/000000/kubernetes.png',
    altName: 'Kubernetes Logo',
    darkThemeTextColour: 'text-blue-500',
    skillToolTipMsg: false,
  },
  {
    name: 'Datadog',
    certUrl:
      'https://datadog.docebosaas.com/share/v1/gamification/assigned_badge/942dde0a-211f-4e54-b9ea-fe148117eec0/shared?lang=en&t=1689281055089',
    imageUrl: 'https://cdn5.dcbstatic.com/files/d/a/datadog_docebosaas_com/assets/badges/original/6149e0bf43bb02e0d6e207efd297a00ce5ac4443.png',
    altName: 'Datadog Logo',
    darkThemeTextColour: 'text-green-500',
    skillToolTipMsg: true,
  },
]
