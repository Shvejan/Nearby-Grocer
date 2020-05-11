import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import ProductCard from "./ProductCard";
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.search.isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="productsDiv">
            <div className="container">
              <h5> Search Results</h5>

              <div className="row">
                {this.props.search.search.DATA.map((p) => (
                  <ProductCard p={p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(SearchResults);
