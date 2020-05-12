import WhyChoose from "./WhyChoose";
import React, { Component } from "react";

import Slide from "./Slide";
import Header from "./Header";
import Footer from "./Footer";
import TopCat from "./TopCat";
import TopBrands from "./TopBrands";
import Catmix from "./Catmix";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slide />
        <TopCat />
        <TopBrands />
        <Catmix />
        <WhyChoose />
        <Footer />
      </React.Fragment>
    );
  }
}
export default Home;
