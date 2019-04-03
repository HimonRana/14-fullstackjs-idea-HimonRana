import React, { Component } from "react";
import Banner from "../banner/Banner";
import LatestProducts from "../products/LatestProducts";

class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <LatestProducts />
      </div>
    );
  }
}

export default Landing;
