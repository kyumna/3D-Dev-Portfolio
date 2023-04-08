import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary `
    }>
      <div className='flex justify-between w-full mx-auto max-w-7xl item-center'>
        <Link className='flex items-center gap-2' onClick={() => {
          setActive("")
          window.scroll(0, 0)
        }}>
          <img src={logo} alt='logo' className='object-contain w-9 h-9' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Andrian &nbsp;
          <span className='hidden sm:block '> | JS Mastery</span> </p>

        </Link>
        <ul className='hidden gap-10 list-none sm:flex felx-row'>
          {
            navLinks.map((Link) => (
              <li className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor pointer`} onClick={() => { setActive(Link.title) }}
                key={Link.id}> <a href='#${Link.id}'>{Link.title}</a></li>
            ))
          }
        </ul>
        <div className='flex items-center justify-end flex-1 sm:hidden'>

          <img src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer '
            onClick={() => setToggle(!toggle)} />


          <div className={`${!toggle ? 'hidden' : 'flex'}  min-w[140px] my-2 z-10 rounded-xl absolute top-20 right-0 mx-4 p-6  black-gradient `}>

            <ul className='flex flex-col items-start justify-end gap-4 list-none'>
              {
                navLinks.map((Link) => (
                  <li className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins hover:text-white text-[16px] font-medium cursor-pointer`} onClick={() => {
                    setToggle(!toggle)
                    setActive(Link.title)
                  }}
                    key={Link.id}>
                    <a href='#${Link.id}'>{Link.title}</a>
                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar