import React, { Component } from "react";
import { fetchBrandProducts } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import Header from "./Header";
import ProductCard from "./ProductCard";
const mapStateToProps = (state) => {
  return {
    brandWiseProducts: state.brandWiseProducts,
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
    this.props.fetchBrandProducts(
      sessionStorage.getItem("branch_id"),
      this.props.b_id,
      50
    );
  }
  render() {
    if (this.props.brandWiseProducts.isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    } else if (this.props.brandWiseProducts.errMess) {
      return (
        <div>
          <Header />
          <div>{this.props.brandWiseProducts.errMess}</div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="productsDiv">
            <div className="container">
              <h5>Results</h5>

              <div className="row">
                {this.props.brandWiseProducts.brandWiseProducts.DATA.map(
                  (p) => (
                    <ProductCard p={p} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);
