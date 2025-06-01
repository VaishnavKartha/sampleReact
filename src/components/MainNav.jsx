import React,{useState} from 'react'
import HeaderNav from './HeaderNav'
import Sidebar from './Sidebar'
const MainNav = () => {
    const [showSidebar,setShowSidebar]=useState(false);
  return (
    <div className='relative'>
      <HeaderNav setVisible={()=>setShowSidebar(true)}/>
      <Sidebar Visible={showSidebar} hideBar={()=>setShowSidebar(false)}/>
    </div>
  )
}

export default MainNav
