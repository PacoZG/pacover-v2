import React from 'react'
import MobileView from '@/components/Toggle/MobileView/MobileView'
import DesktopView from '@/components/Toggle/DesktopView/DesktopView'

const Toggle: React.FC = () => {
  return (
    <div>
      <MobileView />

      <DesktopView />
    </div>
  )
}

export default Toggle
