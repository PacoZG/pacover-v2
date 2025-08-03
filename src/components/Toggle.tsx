import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import useDarkMode from '../hooks/useDarkMode'
import { setTheme } from '@/utils/localdb'

const Toggle: React.FC = () => {
  const [colorTheme, setColorTheme] = useDarkMode()

  const handleTheme = () => {
    setColorTheme(colorTheme)
    setTheme(colorTheme)
  }

  return (
    <div>
      <div className="block md:hidden">
        <div className="flex justify-end items-center space-x-2">
          <div>
            <input type="checkbox" name="" id="toggle" className="hidden" />

            <span
              className="relative w-14 h-7 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={handleTheme}
            >
              <SunIcon className="absolute left-1 h-6 w-6 transition duration-500 text-gray-800 text-opacity-0 dark:text-opacity-100" />

              <div className="w-6 h-6 bg-blue-800 rounded-full shadow-md transition duration-500 dark:transform dark:translate-x-6 "></div>

              <MoonIcon className="absolute right-1 h-5 w-5 transition duration-500 text-gray-800 text-opacity-100 dark:text-opacity-0" />
            </span>
          </div>
        </div>
      </div>

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
    </div>
  )
}

export default Toggle
