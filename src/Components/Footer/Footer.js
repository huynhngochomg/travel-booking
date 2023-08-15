import React, { useEffect } from 'react'
import './Footer.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import {BiLogoMediumOld} from 'react-icons/bi'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv' data-aos='fade-down'>
          <div className='footerLogo'>
            <BiLogoMediumOld className='icon'/>
            <span>OU-Trips</span>
          </div>
          <div className='socials flex'>
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>
        </div>
        
        <div className='footerLinks' data-aos='fade-down'>
          <span className='linkTitle'>
            Information
          </span>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Explore</a></li>
          <li><a href='#'>Travel</a></li>
          <li><a href='#'>Blog</a></li>
        </div>

        <div className='footerLinks' data-aos='fade-down'>
          <span className='linkTitle'>
            Helpful Links
          </span>
          <li><a href='#'>Destination</a></li>
          <li><a href='#'>Support</a></li>
          <li><a href='#'>Travel & Condition</a></li>
          <li><a href='#'>Privacy</a></li>
        </div>
        
        <div className='footerLinks' data-aos='fade-down'>
          <span className='linkTitle'>
            Contact Detail
          </span>
          <span className='phone'>+84376730996</span>
          <span className='email'>giacobehong1996@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
