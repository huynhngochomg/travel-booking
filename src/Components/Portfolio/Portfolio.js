import React, { useEffect } from 'react'
import './Portfolio.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import icon1 from './../../Assets/Images/icon1.png';
import icon2 from './../../Assets/Images/icon2.png';
import icon3 from './../../Assets/Images/icon3.png';
import image from './../../Assets/Images/image.jpg';

const Portfolio = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='portfolio section container'>
      <div className='secContainer grid'>
        <div className='leftContent'>
          <div className='secHeading' data-aos='fade-up'>
            <h3 >Why Should You Choose Us</h3>
            <p >We have extensive knowledge and experience in the travel industry.</p>
          </div>

          <div className='grid'>
            <div className='singlePortfolio flex'data-aos='fade-up'>
              <div className='iconDiv'>
                <img src={icon1} alt='Icon Image' />
              </div>

              <div className='info'>
                <h4 >Safety and support</h4>
                <p> Our top priority is the safety and well-being of our clients. 
                  We maintain high safety standards and 
                  have emergency support available during the trip
                </p>
              </div>
            </div >

            <div className='singlePortfolio flex'data-aos='fade-up'>
              <div className='iconDiv'>
                <img src={icon2} alt='Icon Image' />
              </div>
              <div className='info'>
                <h4 >Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour oran international adventure,
                  we cover a wide range of destinations to cater to different interests and preferences.
                </p>
              </div>
            </div >

            <div className='singlePortfolio flex'data-aos='fade-up'>
              <div className='iconDiv'>
                <img src={icon3} alt='Icon Image' />
              </div>
              <div className='info'>
                <h4 >24/7 Customer support</h4>
                <p> Our dedicated customer support team is available round the clock to address
                   any queries or concerns before during,
                   and after the trip.
                </p>
              </div>
            </div >
          </div>
        </div>

        <div className='rightContent' data-aos='fade-down'>
          <img src={image} alt='Image'/>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
