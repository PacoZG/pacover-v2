'use client'

import React, { useState } from 'react' // No need for useEffect now
import { LinkedinIcon, WhatsappIcon } from 'react-share'
import { Home } from 'lucide-react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { LanguageModel } from '@/utils/language/LanguageModel'
import Toggle from '@/components/Toggle'
import GitHub from '../icons/Github'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import './header-style.css'
import { usePathname } from 'next/navigation'

const Header: React.FC = () => {
  const t = useTranslations('Header')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const useLanguageModel = LanguageModel()

  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="fixed z-50 w-screen bg-gray-100 dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition duration-500 shadow-md">
      {/* Mobile Header */}
      <div className="md:hidden relative flex flex-col ">
        <div className="flex items-center  justify-between px-4 py-2">
          <Link href="/" className="p-2 text-blue-700 dark:text-blue-400">
            <Home className="h-7 w-7" />
          </Link>

          <div className="flex items-center gap-4">
            <Toggle />

            <button
              className="mobile-lang-text-style"
              onClick={useLanguageModel.handleUsersLanguage}
            >
              {useLanguageModel.usersLanguage === 'en' ? 'ESP' : 'ENG'}
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-800 dark:text-blue-200" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-800 dark:text-blue-200" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            {/* The full-screen overlay/background button */}
            <button
              id="langBackground-button"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="fixed inset-0 w-screen h-screen bg-black opacity-50 z-40"
            ></button>

            {/* Mobile Menu Content (conditionally rendered and animated) */}
            <div
              id="mobile-menu-content"
              className="absolute top-14 left-0 w-full bg-gray-100 dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 shadow-lg flex flex-col items-center py-4 space-y-3 animation-slide-down z-50"
            >
              <Link
                className={
                  pathname.includes('presentation')
                    ? 'active-mobile-nav-link'
                    : 'mobile-nav-link'
                }
                href="/cv/presentation"
                onClick={toggleMobileMenu}
              >
                {t('presentation')}
              </Link>

              <Link
                className={
                  pathname.includes('skills_strenghts')
                    ? 'active-mobile-nav-link'
                    : 'mobile-nav-link'
                }
                href="/cv/skills_strenghts"
                onClick={toggleMobileMenu}
              >
                {t('skills')}
              </Link>

              <Link
                className={
                  pathname.includes('experience')
                    ? 'active-mobile-nav-link'
                    : 'mobile-nav-link'
                }
                href="/cv/experience"
                onClick={toggleMobileMenu}
              >
                {t('experience')}
              </Link>

              <div className="flex items-center gap-4 pt-3 border-t border-gray-300 dark:border-gray-700 w-3/4 justify-center">
                <a
                  href="https://www.linkedin.com/in/francisco-zavala/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon size={31} borderRadius={10} />
                </a>

                <a
                  href="https://github.com/PacoZG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub className="bg-gray-300 h-8 w-8 rounded-full dark:bg-gray-700" />
                </a>

                <a
                  href="https://wa.me/358449888032?text=I%20would%20love%20to%20contact%20you%20for%20a%20possible%20interview."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon size={31} borderRadius={10} />
                </a>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Desktop Header */}
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
    </div>
  )
}

export default Header
