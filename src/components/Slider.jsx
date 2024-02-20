import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Carousel from 'react-bootstrap/Carousel';
import imgslider1 from '../Assets/mainslider1.jpg';
import imgslider2 from '../Assets/mainslider2.jpg';
import { Link } from 'react-router-dom';

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
    }, 5000); // Adjust the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)}>
      <Carousel.Item>
        <TransitionGroup>
          <CSSTransition key={index} classNames="fade" timeout={1000}>
            <img src={imgslider2} height={'70%'} alt="no image" className="zoom-in" />
          </CSSTransition>
        </TransitionGroup>
        <Carousel.Caption>
          <div className="col-12 w-50" style={{ marginTop: '-50%' }}>
            <div className="hero">
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>Car Services</h1>
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>For Your</h1>
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>Cars</h1>
              <Link to={'/login'}>
                <button className="btn btn-warning rounded-4" style={{ marginLeft: '-80%' }}>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <TransitionGroup>
          <CSSTransition key={index} classNames="fade" timeout={1000}>
            <img src={imgslider1} height={'70%'} alt="image" className="zoom-in" />
          </CSSTransition>
        </TransitionGroup>
        <Carousel.Caption>
          <div className="col-12 w-50" style={{ marginTop: '-50%' }}>
            <div className="hero">
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>Car Services</h1>
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>For Your</h1>
              <h1 style={{ textAlign: 'left', fontSize: '80px' }}>Cars</h1>
              <Link to={'/login'}>
                <button className="btn btn-warning rounded-4 mt-2" style={{ marginLeft: '-80%' }}>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
