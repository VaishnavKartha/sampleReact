import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = ({ setVisible }) => {
 


  return (
    
    <div className='flex justify-end gap-5 mx-3'>
      <nav className='flex justify-end items-center mx-3 gap-5 hidden md:flex'>
        <Link to={"/"} >Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        
      </nav>
      <div className='md:hidden block cursor-pointer' onClick={setVisible}>☰</div>
    </div>
    
  )
}

export default HeaderNav
