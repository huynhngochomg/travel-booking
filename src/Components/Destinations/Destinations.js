import React, { useEffect } from 'react'
import './Destinations.css'

import Aos from 'aos';
import 'aos/dist/aos.css';

import {MdLocationPin} from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

import image1 from './../../Assets/Images/image1.jpg'
import image2 from './../../Assets/Images/image2.jpg'
import image3 from './../../Assets/Images/image3.jpg'
import image4 from './../../Assets/Images/image4.jpg'
import image5 from './../../Assets/Images/image5.jpg'
import image6 from './../../Assets/Images/image6.jpg'
import image7 from './../../Assets/Images/image7.jpg'
import image8 from './../../Assets/Images/image8.jpg'
import image9 from './../../Assets/Images/image9.jpg'

const Destinations = () => {

  const destinations = [
    {
      id: 1,
      image: image1,
      name: 'Fagaras Mountains',
      location: 'Arefu, AG, Romania',
      rating: 4.7,
    },
    {
      id: 2,
      image: image2,
      name: 'Moraine Lake',
      location: 'Field, AB, Canada',
      rating: 4.6,
    },
    {
      id: 3,
      image: image3,
      name: 'Dubrovnik',
      location: 'Dubrovnik, Dubrovnik-Neretva County, Croatia',
      rating: 4.5,
    },
    {
      id: 4,
      image: image4,
      name: 'Baa Atoll',
      location: 'Baa Atoll, North Province, Maldives',
      rating: 4.7,
    },
    {
      id: 5,
      image: image5,
      name: 'Tortoise beach',
      location: 'Chukai, Terengganu, Malaysia',
      rating: 4.8,
    },
    {
      id: 6,
      image: image6,
      name: 'Golden Bridge',
      location: 'Da Nang, Da Nang, VietNam',
      rating: 4.9,
    },
    {
      id: 7,
      image: image7,
      name: 'Zelenci Nature Reserve',
      location: 'Jesenice, Slovenia',
      rating: 4.3,
    },
    {
      id: 8,
      image: image8,
      name: 'Lake Bled',
      location: 'Slovenia',
      rating: 4.4,
    },
    {
      id: 9,
      image: image9,
      name: 'Seiser Alm',
      location: 'Selva di Val Gardena, Trentino-Alto Adige, Italy',
      rating: 4.6,
    },
  ]

  useEffect(()=> {
    Aos.init({duration: 2000})
  },[]);


  return (
    <div className='destination section container'>
        <div className='secContainer'>
          <div className='secTitle' data-aos='fade-up'>
            <span className='redText'>EXPLORE NOW</span>
            <h3 >Find Your Dream Destination</h3>
            <p >Fill in the fields below to find the best spot for your next tour.</p>
          </div>

          <div className='searchField grid' data-aos='fade-up'>
            <div className='inputField flex'>
              <MdLocationPin className='icon'/>
              <input type='text' placeholder='Location' />
            </div>

            <div className='inputField flex'>
              <BsFillCreditCardFill className='icon'/>
              <input type='text' placeholder='Budget' />
            </div>

            <div className='inputField flex'>
              <BsFillCalendarDateFill className='icon'/>
              <input type='text' placeholder='Date' />
            </div>
          
            <button className='btn flex'> <BiSearchAlt className='icon' />Search</button>
          </div>
          
          <div className='secMenu'>
            <ul className='flex' data-aos='fade-up'>
              <li className='active'>All</li>
              <li>Recommended</li>
              <li>Beach</li>
              <li>Park</li>
              <li>Nature</li>
              <li>Mountain</li>
            </ul>
          </div>

          <div className='destinationContainer grid' >
            {destinations.map(destination => {
              return (
                <div className='singleDestination' key={destination.id} data-aos='fade-up'>
                  <div className='imgDiv'>
                    <img src={destination.image} alt='Destination Image'/>
                    <div className='descInfo flex'>
                      <div className='text'>
                        <span className='name'>{destination.name}</span>
                        <p className='flex'>
                          <TiLocation className='icon'/>
                          {destination.location}
                        </p>
                      </div>
                      <span className='rating'>
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Destinations
