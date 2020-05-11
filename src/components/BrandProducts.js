import React, { Component } from "react";
import { fetchBrandProducts } from "../redux/ActionCreators";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    brandProducts: state.brandProducts,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchBrandProducts: (branch_id, brand_id, limit) =>
    dispatch(fetchBrandProducts(branch_id, brand_id, limit)),
});

class BrandProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    alert();
    this.props.fetchBrandProducts(
      sessionStorage.getItem("branch_id"),
      this.props.b_id,
      50
    );
  }
  render() {
    return <h1>{this.props.b_id}</h1>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);
