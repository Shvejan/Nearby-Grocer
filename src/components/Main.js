import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slide";
import AllProducts from "./AllProducts";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slides />
        <AllProducts />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
