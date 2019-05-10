import React, { Component } from "react";
import Banner from "../banner/Banner";
import LatestProducts from "../products/LatestProducts";

import "./Layout.scss";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <LatestProducts />
      </React.Fragment>
    );
  }
}

export default Landing;
