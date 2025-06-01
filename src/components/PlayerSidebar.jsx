import React from 'react'
import { useLocation } from 'react-router-dom'
import SideBarButtons from './sideBarButtons'

const PlayerSideBar = () => {
    const loc=useLocation();
  return (
    <div className='w-1/5 bg-amber-300 h-screen flex flex-col justify-between items-center'>
      <div>Profile</div>
      <SideBarButtons currentLoc={loc.pathname}/>
      <div>Logout</div>
    </div>
  )
}

export default PlayerSideBar
