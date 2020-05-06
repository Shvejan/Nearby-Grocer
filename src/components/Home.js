import Slides from "./Slide";
import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";
import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Slides />
        <AllProducts />
        <WhyChoose />
      </React.Fragment>
    );
  }
}
export default Home;
