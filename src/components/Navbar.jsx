import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets'

const Navbar = () => {
  return (
    <nav className={
      `${styles.paddingX} w-full flex item-center py-5 top-0 z-20 bg-primary `
    }>
    <div className='flex justify-between mx-auto max-w-7xl item-center'>
    <Link className='flex items-center gap-2' onClick={()=>{
      setActive("")
      window.scroll(0,0)
    }}>
    <img src={logo} alt='logo' className='object-contain w-9 h-9'/>
    
    </Link>
    </div>
    </nav>
  )
}

export default Navbar