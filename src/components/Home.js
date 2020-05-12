import AllProducts from "./AllProducts";
import WhyChoose from "./WhyChoose";
import React, { Component } from "react";
import b1 from "./images/banner1.png";
import b2 from "./images/banner2.png";
import b3 from "./images/banner3.png";
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
        <Slide banners={[b1, b2, b3]} />
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
