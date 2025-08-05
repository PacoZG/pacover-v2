import React from 'react'
import { Link } from '@/i18n/navigation'
import { Home } from 'lucide-react'
import { LinkedinIcon, WhatsappIcon } from 'react-share'
import { useTranslations } from 'next-intl'
import Toggle from '@/components/Toggle'
import GitHub from '@/components/icons/Github'
import { LanguageModel } from '@/utils/language/LanguageModel'

const DesktopView = () => {
  const t = useTranslations('Header')
  const useLanguageModel = LanguageModel()

  return (
    <div className="hidden md:flex items-center justify-between px-8 py-3">
      <div className="flex items-center gap-2">
        <Link href="/" className="p-2 text-blue-700 dark:text-blue-400">
          <Home className="h-8 w-8" />
        </Link>

        <Toggle />
      </div>

      <div className="flex items-center gap-2 lg:gap-12">
        <Link className="desktop-nav-link" href="/cv/presentation">
          {t('presentation')}
        </Link>

        <Link className="desktop-nav-link" href="/cv/skills_strenghts">
          {t('skills')}
        </Link>

        <Link className="desktop-nav-link" href="/cv/experience">
          {t('experience')}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/francisco-zavala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon size={30} borderRadius={10} />
        </a>

        <a
          href="https://github.com/PacoZG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="bg-gray-300 h-8 w-8 rounded-full" />
        </a>

        <a
          href="https://wa.me/358449888032?text=I%20would%20love%20to%20contact%20you%20for%20a%20possible%20interview."
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={30} borderRadius={10} />
        </a>

        <button
          className="pc-lang-text-style"
          onClick={useLanguageModel.handleUsersLanguage}
        >
          {useLanguageModel.usersLanguage === 'en' ? 'ESP' : 'ENG'}
        </button>
      </div>
    </div>
  )
}

export default DesktopView
