import React, { Component } from "react";
import Banner from "../banner/Banner";
import Products from "../products/Products";

class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Products />
      </div>
    );
  }
}

export default Landing;
