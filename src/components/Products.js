import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/ActionCreators";
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (branch_id, sub_category_id) =>
    dispatch(fetchProducts(branch_id, sub_category_id)),
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.verify(this.props.subCatId);
  }
  verify = (id) => {
    if (isNaN(id)) {
      if (!this.props.subCatIdList.isLoading) {
        try {
          const x = this.props.subCatIdList.subCat.DATA[0].sub_category_id;
          this.avaliableProducts(this.props.branch_id, x);
        } catch (e) {
          return <h1>No products avaliable</h1>;
        }
      }
    } else {
      this.avaliableProducts(this.props.branch_id, this.props.subCatId);
    }
  };
  avaliableProducts = (branch_id, subCatId) => {
    this.props.fetchProducts(branch_id, subCatId);
  };
  render() {
    return <div>this.verify(this.props.subCatId)</div>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
