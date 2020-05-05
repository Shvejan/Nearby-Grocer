import React, { Component } from "react";
import i1 from "./images/why/quality-tag.png";
import i2 from "./images/why/delivery-vehicle.png";
import i3 from "./images/why/return-policy.png";

class WhyChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row" style={{ "padding-bottom": "50px" }}>
          <hr
            className="col-1"
            style={{
              height: "4px",
              background: "#1eaca0",
              "margin-top": "25px ",
              "margin-right": "10px",
            }}
          />
          <h1 className="col-4">Why choose StarQuik?</h1>
          <hr
            className="col-1"
            style={{
              height: "4px",
              background: "#1eaca0",
              "margin-top": "25px ",
              "margin-left": "0px",
            }}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col offset-2" style={{ "padding-left": "40px" }}>
            <img src={i1} />
            <h3>Quality</h3>
            <p>You can trust</p>
          </div>
          <div className="col  ml-2">
            <img src={i2} />
            <h3>Free</h3>
            <p>on orders above Rs. 500</p>
          </div>
          <div className="col">
            <img src={i3} />
            <h3>Return</h3>
            <p>No questions asked</p>
          </div>
        </div>
        <div
          className="productsDiv"
          style={{ "padding-bottom": "200px" }}
        ></div>
      </div>
    );
  }
}

export default WhyChoose;
