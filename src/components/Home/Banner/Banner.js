import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../images/Slider/slider1.png";
import slider3 from "../../../images/Slider/slider2.jpg";
import slider2 from "../../../images/Slider/slider3.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="slider">
      <Carousel className="">
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5">Our Latest Technologies</h3>
            <p className=" fw-bolder fs-3">
              All important technologies and facilities are available.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5">Our High Profile Doctors</h3>
            <p className=" fw-bolder fs-3">
              Doctors are always there to help you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold fs-1 mt-5">Our Attractive Environment</h3>
            <p className=" fw-bolder fs-3">Envrionment can help you to heal.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
