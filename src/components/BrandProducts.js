import React, { Component } from "react";
class BrandProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <h1>{this.props.b_id}</h1>;
  }
}

export default BrandProducts;
