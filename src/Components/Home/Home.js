import React, { useEffect } from 'react'
import './Home.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import Video from './../../Assets/Videos/videoHome.mp4'
import image1 from './../../Assets/Images/popular-image1.jpg'
import image2 from './../../Assets/Images/popular-image2.jpg'
import image3 from './../../Assets/Images/popular-image3.jpg'
import image4 from './../../Assets/Images/popular-image4.jpg'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Home = () => {

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);

  return (
    <div className='home'>
      <div className='videoBg'>
        <video src={Video} loop autoPlay muted></video>
      </div>

      <div className='sectionText'>
        <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='fade-up'>Discover the world's most adventurous nature, life is so short for a trip.</p>
        <button className='btn flex' data-aos='fade-up'>GET STARTED <AiOutlineSwapRight className='icon'/></button>
      </div>

      <div className='popularPlaces'>
         <div className='content'>
            <h3 data-aos='fade-up'>Popular Places</h3>
            <div className='images flex' data-aos='fade-up'>
              <img src={image1} alt='Image Popular Places' />
              <img src={image2} alt='Image Popular Places' />
              <img src={image3} alt='Image Popular Places' />
              <img src={image4} alt='Image Popular Places' />
            </div>
         </div>
      </div>
    </div>
  )
}

export default Home
