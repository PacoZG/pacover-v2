'use client'

import React from 'react'
import './header-style.css'
import MobileView from '@/components/Header/MobileView/MobileView'
import DesktopView from '@/components/Header/DesktopView/DesktopView'

const Header: React.FC = () => {
  return (
    <div className="fixed z-50 w-screen bg-gray-100 dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm transition duration-500 shadow-md">
      <MobileView />

      <DesktopView />
    </div>
  )
}

export default Header
