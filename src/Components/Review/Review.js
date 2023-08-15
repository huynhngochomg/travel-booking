import React, { useEffect } from 'react'
import './Review.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import {AiFillStar} from 'react-icons/ai'

import image from './../../Assets/Images/imgDiv.jpg'
import image1 from './../../Assets/Images/client-image1.jpg'
import image2 from './../../Assets/Images/client-image2.jpg'
import image3 from './../../Assets/Images/client-image3.jpg'
import image4 from './../../Assets/Images/client-image4.jpg'

const Review = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='review section container '>
      <div className='secContainer grid'>
        <div className='textDiv' data-aos='fade-up'>
          <span className='redText'>FROM OUR CLIENTS</span>
          <h3 >Real Travel History From Our Beloved Clients</h3>
          <p >
            By choosing us as their tour agency, 
            customers can expect an enriching and enjoyable travel experience, 
            filled with unforgettable memories that will last a lifetime.
          </p>

          <span className='stars flex' >
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>

          <div className='clientsImages flex'>
            <img src={image1} alt='Client Image' />
            <img src={image2} alt='Client Image' />
            <img src={image3} alt='Client Image' />
            <img src={image4} alt='Client Image' />
          </div>

        </div>

        <div className='imgDiv' data-aos='fade-down'>
          <img src={image} alt='Image Div' />
        </div>
      </div>
    </div>
  )
}

export default Review
