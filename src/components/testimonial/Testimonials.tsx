import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonial.css'
// Import Swiper React components
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut cum dolores commodi vel labore quo! Tempora illo iusto error.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut cum dolores commodi vel labore quo! Tempora illo iusto error.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut cum dolores commodi vel labore quo! Tempora illo iusto error.'
  },
  {
    avatar: AVTR4,
    name: 'Mana Ana McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut cum dolores commodi vel labore quo! Tempora illo iusto error.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      className="container testimonials__container"
      >
        
        {
          data.map(({avatar, name,review}, index) =>{
            return(
              <SwiperSlide className='testimonial' key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one"/>
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials