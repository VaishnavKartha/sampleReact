import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const BreadCrumbs = () => {
    const { pathname }=useLocation();

    const pathList=pathname.split("/").filter((ele)=>ele);
    let breadCrumbPath="";
 


  return (
    <div>
        <Link to={'/'}>Home</Link>
      {pathList.map((path,index)=>{
        breadCrumbPath+=`/${path}`
        const isLast=index===pathList.length-1
        return isLast?<span className='text-gray-500'>/{path}</span>:<Link to={breadCrumbPath}>/{path}</Link>
      })}
    </div>
  )
}

export default BreadCrumbs
