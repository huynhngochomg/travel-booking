import React, { useEffect } from 'react'
import './Subscribe.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import image from './../../Assets/Images/subscribe-image.png'

const Subscribe = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='subscribe section container'>
      <div className='secContainer grid'>
        <img src={image} alt='Div Image' data-aos='fade-down'/>

        <div className='textDiv' data-aos='fade-up'>
          <h4 >Best Way To Start Your Journey!</h4>
          <p >We offer personalized itineraries tailored to individual
              preferences and interests.
          </p>
          <button className='btn'>Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe

