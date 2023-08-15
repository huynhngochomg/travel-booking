import React, { useEffect } from 'react'

import Aos from 'aos';
import 'aos/dist/aos.css';

import {BsArrowDownCircle} from 'react-icons/bs'
import {BsArrowUpCircle} from 'react-icons/bs'

const Accordion = ({title, desc, active, setActive}) => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='accordionContainer' data-aos='fade-down'>
      
      <span className={(active === title ? "activeTitle" : "") + " title" + " flex"} onClick={() => setActive(title)}>
        {title}
        <span >
          {active === title ? <BsArrowUpCircle className='icon white'/> : <BsArrowDownCircle className='icon'/>}
        </span>
      </span>

      <p className={(active === title ? "show" : "") + " description"}>
        {desc}
      </p>
    </div>
  )
}

export default Accordion
