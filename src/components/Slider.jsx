import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgslider1 from '../Assets/mainslider1.jpg'
import imgslider2 from '../Assets/mainslider2.jpg'


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={imgslider2} height={'70%'} alt="no image" />
        <Carousel.Caption >
         <div className='col-12 w-50' style={{ marginTop:'-50%' }}>
              <div className='hero'>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>Car Services</h1>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>For Your</h1>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>Cars</h1>
              <button className='btn btn-warning rounded-4' style={{marginLeft:'-80%'}}>Book Now</button>
              </div>             
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgslider1} height={'70%'} alt="image" />
        <Carousel.Caption>
        <div className='col-12 w-50' style={{ marginTop:'-50%' }}>
              <div className='hero'>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>Car Services</h1>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>For Your</h1>
                <h1 style={{textAlign:'left', fontSize:'80px'}}>Cars</h1>
                <button className='btn btn-warning rounded-4 mt-2' style={{marginLeft:'-80%'}}>Book Now</button>
              </div>             
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
}

export default Slider