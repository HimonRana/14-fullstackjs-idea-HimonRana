import React, { Component } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Welcome</h1>
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
