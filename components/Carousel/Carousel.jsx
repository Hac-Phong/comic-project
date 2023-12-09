'use client'

import Slider from 'react-slick'

import React, { useRef } from 'react'
import CardImg from '../Card/CardImg'

const Carousel = ({ items, autoplay, data, h1 }) => {
  const sliderRef = useRef()
  const gotoNext = () => {
    sliderRef.current.slickNext()
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev()
  }
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '160px',
    slidesToShow: items,
    swipeToSlide: true,
    autoplay: autoplay,
    // speed: 3000,
    autoplaySpeed: 3000,
  }
  return (
    <div className="text-white my-5 bg-accent-content overflow-hidden">
      <div className="z-50 py-4 bg-gradient-to-r from-[#5d0914] to-transparent mb-5 flex justify-between items-center px-3">
        <p className="text-lg uppercase font-semibold">{h1}</p>
        <div className="border-2 border-white/10 rounded-full space-x-1 py-1 flex items-center ">
          <button
            className="bi bi-chevron-left px-1 text-xl cursor-pointer flex items-center hover:text-yellow-500"
            onClick={gotoPrev}
          ></button>
          <span className="h-6 w-0.5 bg-white/10 rounded-full"></span>
          <button
            className="bi bi-chevron-right px-1 flex items-center text-xl cursor-pointer hover:text-yellow-500"
            onClick={gotoNext}
          ></button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {data.map((e, index) => (
          <CardImg key={index} props={e} />
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
