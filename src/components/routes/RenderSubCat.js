import React, { Component } from "react";
import Slide from "../Slide";
import SubProducts from "./SubProducts";
class RenderSubCat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Slide banners={this.props.banners} />
        <div className="productsDiv">
          <hr
            style={{
              height: "9px",
              background: "#f38218",
            }}
          />
          <h2
            style={{
              "margin-left": "50px",
              "margin-top": "30px",
              "margin-bottom": "80px",
            }}
          >
            Showing Products for
            <span style={{ color: "#11afa2" }}> {this.props.title}</span>
          </h2>
          <div className="container ">
            <SubProducts />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderSubCat;
