import React, { Component } from "react";
import "./Carousel.scss";
import Slider from "react-slick";
import { IMG_CAROUSEL } from "../../../store/constant/constant";

class Carousel extends Component {
  render() {
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    const list = IMG_CAROUSEL.map((item, index) => (
      <div key={index} className="carousel__item">
        <img src={item} alt="1" className="w-100 img-fluid" />
      </div>
    ));
    return (
      <>
        <Slider {...settings} className="carousel__slide">
          {list}
        </Slider>
      </>
    );
  }
}

export default Carousel;
