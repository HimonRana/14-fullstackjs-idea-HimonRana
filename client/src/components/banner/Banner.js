import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/img/pexel1.jpeg";
import img2 from "../../assets/img/pexel2.jpeg";
import img3 from "../../assets/img/pexel3.jpeg";
import img4 from "../../assets/img/pexel4.jpeg";
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
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="img-container">
            <img src={img1} alt="" />
          </div>
          <div className="img-container">
            <img src={img2} alt="" />
          </div>
          <div className="img-container">
            <img src={img3} alt="" />
          </div>
          <div className="img-container">
            <img src={img4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Banner;
