import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  productsClear,
  cartAdd,
  cartRemove,
} from "../redux/ActionCreators";
import { Loading } from "./Loading";

import ProductCard from "./ProductCard";
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (branch_id, sub_category_id) =>
    dispatch(fetchProducts(branch_id, sub_category_id)),
  productsClear: () => dispatch(productsClear()),
  cartAdd: (data) => dispatch(cartAdd(data)),
  cartRemove: (id) => dispatch(cartRemove(id)),
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchProducts(this.props.branch_id, this.props.subCatId);
  }
  render() {
    if (isNaN(this.props.subCatId)) {
      return <h3>Select a sub category</h3>;
    } else {
      if (this.props.products.isLoading) {
        return <Loading />;
      } else {
        if (this.props.products.products.STATUS === "Failure")
          return <h3>No Products avaliable</h3>;
        return (
          <div className="row">
            {this.props.products.products.DATA.map((p) => (
              <ProductCard p={p} />
            ))}
          </div>
        );
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
