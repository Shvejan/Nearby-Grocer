import React, { Component } from "react";
import RenderSubCat from "./RenderSubCat";
import b1 from "../images/beverages/sq_feb_l1_bev_bmsm_web.png";
import b2 from "../images/beverages/wdhcbhc.jpg";
import Header from "../Header";
import Footer from "../Footer";
class Beverages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <RenderSubCat banners={[b1, b2, b1]} title="Beverages" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Beverages;
