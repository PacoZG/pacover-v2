import React from 'react'
import {
  Css,
  Cypress,
  DockerLogo,
  Java,
  Redux,
  SQLLogo,
  TailwindCss,
  Typescript
} from '@/components/icons'

type Technologies = {
  name: string
  certUrl?:string
  imageUrl?: string
  altName?: string
  imageExtraStyle: string
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
    darkThemeTextColour: 'dark:text-yellow-400',
    skillToolTipMsg: true,
  },
  {
    name: 'React',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/officel/80/000000/react.png',
    altName: 'React Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'dark:text-blue-300',
    skillToolTipMsg: true,
  },
  {
      name: 'Redux',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
      altName: 'Javascript Logo',
      darkThemeTextColour: 'dark:text-blue-300',
      skillToolTipMsg: true,
      IconComponent: <Redux className="skill-logo" />,
      imageExtraStyle: ""
  },
  {
    name: 'GraphQL',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/48/000000/graphql.png',
    altName: 'GraphQL Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'dark:text-pink-500',
    skillToolTipMsg: true,
  },
  {
    name: 'React-Native',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: "https://img.icons8.com/nolan/600/react-native.png",
    altName: 'React-Native Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'dark:text-pink-700',
    skillToolTipMsg: true,
  },
  {
    name: 'TypeScript',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117644/eawik5gh4ahctjy39sby.png',
    altName: 'TypeScript Logo',
    imageExtraStyle: 'object-contain',
    darkThemeTextColour: 'dark:text-blue-500',
    skillToolTipMsg: true,
    IconComponent: <Typescript className="skill-logo object-contain" />
  },
  {
      name: 'HTML',
      imageUrl: 'https://img.icons8.com/color/344/html-5--v1.png',
      altName: 'HTML Logo',
      darkThemeTextColour: 'dark:text-yellow-600',
      skillToolTipMsg: false,
      imageExtraStyle: ""
  },
  {
      name: 'CSS',
      IconComponent: <Css className="skill-logo" />,
      altName: 'CSS Logo',
      darkThemeTextColour: 'dark:text-blue-600',
      skillToolTipMsg: false,
      imageExtraStyle: ""
  },
  {
      name: 'MongoDB',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
      imageUrl: 'https://img.icons8.com/color/600/000000/mongodb.png',
      altName: 'MongoDB Logo',
      darkThemeTextColour: 'dark:text-green-400',
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
    name: 'Node.js',
    certUrl:
      'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
    imageUrl: 'https://img.icons8.com/color/600/000000/nodejs.png',
    altName: 'Node.js Logo',
    imageExtraStyle: 'bg-green-400 p-3 object-contain',
    darkThemeTextColour: 'dark:text-green-400',
    skillToolTipMsg: true,
  },
  {
      name: 'SQL',
      certUrl: 'https://res-cloudinary-com/dbn5gpgi5/image/upload/v1681117640/zomoudnr2mriz6zvdetq.png',
      altName: 'SQL Logo',
      darkThemeTextColour: 'dark:text-blue-400',
      IconComponent: <SQLLogo className="skill-logo" />,
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
      name: 'Tailwindcss',
      altName: 'Tailwindcss Logo',
      darkThemeTextColour: 'dark:text-blue-400',
      IconComponent: <TailwindCss className="skill-logo object-contain" />,
      skillToolTipMsg: false,
      imageExtraStyle: ""
  },
  {
      name: 'Cypress.io',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117638/ji8dwtahm9dom6kuzxbm.png',
      altName: 'Cypress.io Logo',
      darkThemeTextColour: 'dark:text-gray-200',
      IconComponent: <Cypress className="skill-logo" />,
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
      name: 'Docker',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681117643/q26fq714x9njo4pxskps.png',
      altName: 'Docker Logo',
      darkThemeTextColour: 'dark:text-blue-500',
      IconComponent: <DockerLogo className="skill-logo bg-transparent" />,
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
      name: 'Kubernetes',
      certUrl: '',
      imageUrl: 'https://img.icons8.com/color/600/000000/kubernetes.png',
      altName: 'Kubernetes Logo',
      darkThemeTextColour: 'dark:text-blue-500',
      skillToolTipMsg: false,
      imageExtraStyle: ""
  },
  {
      name: 'Datadog',
      certUrl: 'https://datadog.docebosaas.com/share/v1/gamification/assigned_badge/942dde0a-211f-4e54-b9ea-fe148117eec0/shared?lang=en&t=1689281055089',
      imageUrl: 'https://cdn5.dcbstatic.com/files/d/a/datadog_docebosaas_com/assets/badges/original/6149e0bf43bb02e0d6e207efd297a00ce5ac4443.png',
      altName: 'Datadog Logo',
      darkThemeTextColour: 'dark:text-green-500',
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
      name: 'Java Programming I',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118753/rtibuwlmtzmdtr35u2gw.png',
      altName: 'Java Programming I Logo',
      darkThemeTextColour: 'dark:text-yellow-600',
      IconComponent: <Java className="skill-logo" />,
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
  {
      name: 'Java Programming II',
      certUrl: 'https://res.cloudinary.com/dbn5gpgi5/image/upload/v1681118770/v7jfhsjvhla0pyw1p1dr.png',
      altName: 'Java Programming II Logo',
      darkThemeTextColour: 'dark:text-yellow-600',
      IconComponent: <Java className="skill-logo" />,
      skillToolTipMsg: true,
      imageExtraStyle: ""
  },
]
