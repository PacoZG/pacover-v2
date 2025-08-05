import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

type IconImageProps = {
  name: string
  imageUrl?: string,
  certUrl?: string,
  altName?: string,
  darkThemeTextColour: string,
  IconComponent?: React.ReactNode,
  skillToolTipMsg: boolean
}

const IconImage: React.FC<IconImageProps> = ({
  name,
  imageUrl,
  certUrl,
  altName,
  darkThemeTextColour,
  IconComponent,
  skillToolTipMsg
}) => {
  const t = useTranslations('skills')

  return (
    <div>
      <a
        skill-tool-tip-msg={skillToolTipMsg ? t('click-for-certificate'): undefined}
        className="skill-card"
        href={certUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {imageUrl && altName ? (
          <Image
            className="skill-logo object-contain"
            src={imageUrl}
            alt={altName}
            width={600}
            height={600}
          />
        ) : (
          IconComponent
        )}
        <p className={`skill-text dark:${darkThemeTextColour}`}>{name}</p>
      </a>
    </div>
  )
}

export default IconImage
