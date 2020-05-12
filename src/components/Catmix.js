import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCatmix } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import Header from "./Header";
import ProductCard from "./ProductCard";
const mapStateToProps = (state) => {
  return {
    catmix: state.catmix,
  };
};
const mapDispatchToProps = (dispatch) => ({});
class Catmix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.catmix.isLoading) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "50px" }}>
          <div className="container">
            <h1>Category Mix</h1>

            <div className="row">
              {this.props.catmix.catmix.DATA.map((p) => (
                <ProductCard p={p} />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catmix);
