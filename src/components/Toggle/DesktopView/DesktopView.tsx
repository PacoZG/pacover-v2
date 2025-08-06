import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import React from 'react'
import useDarkMode from '@/hooks/useDarkMode'
import { setTheme } from '@/utils/localdb'

const DesktopView = () => {
  const [colorTheme, setColorTheme] = useDarkMode()

  const handleTheme = () => {
    setColorTheme(colorTheme)
    setTheme(colorTheme)
  }

  return (
    <div className="hidden md:block">
      <div className="flex justify-end items-center space-x-2">
        <SunIcon className="h-6 w-6 transition duration-500 dark:text-gray-300" />

        <div>
          <input type="checkbox" name="" id="toggle" className="hidden" />
          <span
            className="w-9 h-5 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
            onClick={handleTheme}
          >
            <div className="w-4 h-4 bg-blue-800 rounded-full shadow-md transition duration-100 dark:transform dark:translate-x-3"></div>
          </span>
        </div>

        <MoonIcon className="h-5 w-5 transition duration-500 dark:text-gray-300 " />
      </div>
    </div>
  )
}

export default DesktopView
