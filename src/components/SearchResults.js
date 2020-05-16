import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
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
            <div style={{ marginLeft: "600px", marginTop: "100px" }}>
              <span>Page: </span>
              <Link to="/allbrands/1">
                <span>1</span>
              </Link>

              <span> </span>
              <Link to="/allbrands/2">
                <span>2</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/3">
                <span>3</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/4">
                <span>4</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/5">
                <span>5</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/6">
                <span>6</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/7">
                <span>7</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/8">
                <span>8</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/9">
                <span>9</span>
              </Link>
              <span> </span>
              <Link to="/allbrands/10">
                <span>10</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(SearchResults);
