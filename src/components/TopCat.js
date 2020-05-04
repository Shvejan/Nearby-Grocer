import React, { Component } from "react";

class TopCat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="container"
        style={{ "margin-top": "100px", "margin-bottom": "100px" }}
      >
        <h3>Top Categories</h3>
        <div>
          <div>
            <button className="topbtn hc1">Health Drinks</button>
            <button className="topbtn hc1">Chicken</button>
            <button className="topbtn  hc3">Cleaners</button>
            <button className="topbtn hc5">Rice</button>
            <button className="topbtn hc2">Gifting</button>
          </div>

          <div>
            <button className="topbtn hc1">Health Drinks</button>

            <button className="topbtn hc5">Rice</button>
            <button className="topbtn hc2">Gifting</button>
            <button className="topbtn hc1">Chicken</button>
            <button className="topbtn  hc3">Cleaners</button>
          </div>

          <div>
            <button className="topbtn hc1">Health Drinks</button>

            <button className="topbtn hc5">Rice</button>
            <button className="topbtn hc1">Chicken</button>
            <button className="topbtn  hc3">Cleaners</button>
            <button className="topbtn hc2">Gifting</button>
          </div>
          <div>
            <button className="topbtn hc1">Chicken</button>
            <button className="topbtn  hc3">Cleaners</button>
            <button className="topbtn hc1">Health Drinks</button>

            <button className="topbtn hc5">Rice</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TopCat;
