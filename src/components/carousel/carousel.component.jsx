import React from 'react';
import { Carousel } from 'react-bootstrap';

import firstaid from '../../assets/firstaid-drone.jpg';
import medic from '../../assets/medic-drone.webp';
import trans from '../../assets/blood-trans.jpg';

import './carousel.styles.css';

const CarouselContainer =() => {
    return (
      <>
      <h4 className="carousel-header">A picture is worth a thousand words </h4>
        <Carousel fade className="carousels">
  <Carousel.Item interval="2000">
    <div className="carousel-img-wrapper">
      <img
        className="d-block w-100"
        src={firstaid}
        alt="First slide"
      />
    </div>
    
    <Carousel.Caption>
      <h3>Available</h3>
      <p>Always available to serve you regardless of what time of the day it is</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval="2000">
  <div className="carousel-img-wrapper">
      <img
        className="d-block w-100"
        src={medic}
        alt="Second slide"
      />
    </div>

    <Carousel.Caption>
      <h3>Affordable</h3>
      <p>For a very small token, you get to enjoy all of our services without breaking the bank.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval="2000">
  <div className="carousel-img-wrapper">
      <img
        className="d-block w-100"
        src={trans}
        alt="Third slide"
      />
    </div>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
        
    )
}

export default CarouselContainer;