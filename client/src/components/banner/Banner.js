import React, { Component } from "react";
import Slider from "react-slick";

import "./Banner.css";

class Banner extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      swipeToSlide: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/365067/pexels-photo-365067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1103511/pexels-photo-1103511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=400" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
