import React, { useState } from 'react'
import './Navbar.css'



import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {

  const [menu, setMenu] = useState('menu');

  const handleShowMenu = () => {
    setMenu('menu showMenu')
  }

  const handleCloseMenu = () => {
    setMenu('menu')
  }

  return (
    <div className='navbar flex'>
      <div className='logoDiv flex'>
        <BiLogoMediumOld className='icon' />
        <span >OU-Trips</span>
      </div>

      <div className={menu}>
        <ul> 
          <li className='navList'>
            Destination
          </li>
          <li className='navList'>
            About Us
          </li>
          <li className='navList'>
            Testimonial
          </li>
          <li className='navList'>
            Gallery
          </li>
        </ul>
        {/* Icon to remove navbar */}
        <AiFillCloseCircle className='icon closeIcon' onClick={handleCloseMenu}/>
      </div>
      <button className='signUpBtn btn'>
        Sign Up
      </button>
      {/* Icon Toggle Navbar */}
      <PiDotsNineBold className='icon menuIcon' onClick={handleShowMenu}/>
    </div>
  )
}

export default Navbar
