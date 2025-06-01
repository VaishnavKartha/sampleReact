import React from 'react'
import { Link } from 'react-router-dom';
const buttons=[{name:"Feed",loc:"/feed"},{name:"Trending",loc:"/trending"},{name:"Player",loc:"/player"},{name:"Favorites",loc:"/favorites"},{name:"Library",loc:"/"}]
const SideBarButtons = ({currentLoc}) => {
  return (
    <div className='flex flex-col gap-10'>
      {buttons.map((button,index)=>{
        return <Link to={button.loc}>
                    <button key={index} className={`bg-amber-200 rounded-full px-2 py-1 cursor-pointer active:bg-amber-400 hover:scale-110 
                                                transition-scale duration-200 ease-in transition-bg duration-100 ease-in ${currentLoc===button.loc?"bg-amber-500":""}`} >
                        {button.name}

                    </button>
                </Link>
      })}
    </div>
  )
}

export default SideBarButtons
