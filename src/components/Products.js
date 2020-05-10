import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, productsClear } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import { Redirect } from "react-router-dom";
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (branch_id, sub_category_id) =>
    dispatch(fetchProducts(branch_id, sub_category_id)),
  productsClear: () => dispatch(productsClear()),
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h3>padoijaodijaodkjdcts</h3>;
  }
}
const ProductCard = (props) => {
  return <h3>{props.p.product_name}</h3>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
