import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ Visible,hideBar }) => {
    useEffect(()=>{
        const handleKeys=(e)=>{
            if(e.key==="Escape"){
                hideBar();
                //return
            }
            return
        }
        document.addEventListener("keydown",handleKeys);
        return ()=>document.removeEventListener("keydown",(e)=>handleKeys(e))
    },[Visible]);
  return (
    <div className={`${Visible ? "flex":"hidden"} md:hidden fixed right-0 top-10  flex-col gap-10`}>
        <div onClick={hideBar} className='cursor-pointer'>❌</div>
        <Link to={"/"} >Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
      
    </div>
  )
}

export default Sidebar

