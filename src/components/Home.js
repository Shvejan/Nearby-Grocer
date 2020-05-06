import Slides from "./Slide";
import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";
import React, { Component } from "react";
import b1 from "./images/banner1.png";
import b2 from "./images/banner2.png";
import b3 from "./images/banner3.png";
import Slide from "./Slide";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Slide banners={[b1, b2, b3]} />
        <AllProducts />
        <WhyChoose />
      </React.Fragment>
    );
  }
}
export default Home;
