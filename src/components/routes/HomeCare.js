import React, { Component } from "react";
import b1 from "../images/beverages/sq_feb_l1_bev_bmsm_web.png";
import b2 from "../images/beverages/wdhcbhc.jpg";
import RenderSubCat from "./RenderSubCat";

class HomeCare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <RenderSubCat banners={[b1, b2, b1]} title="Home Care" />;
  }
}

export default HomeCare;
