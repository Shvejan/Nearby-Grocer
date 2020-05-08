import React, { Component } from "react";
import b1 from "../images/beverages/sq_feb_l1_bev_bmsm_web.png";
import b2 from "../images/beverages/wdhcbhc.jpg";
import RenderSubCat from "./RenderSubCat";
import Header from "../Header";
import Footer from "../Footer";
class FrozenVeg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header /> <RenderSubCat banners={[b1, b2, b1]} title="Frozen Veg" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default FrozenVeg;
