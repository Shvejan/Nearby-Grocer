/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import ProductCard from "./ProductCard";
const mapStateToProps = (state) => {
  return {
    catmix: state.catmix,
    catmix1: state.catmix1,
    catmix2: state.catmix2,
    catmix3: state.catmix3,
    catmix4: state.catmix4,
  };
};
const mapDispatchToProps = (dispatch) => ({});
class Catmix extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var arr = [];
    try {
      arr = sessionStorage.getItem("catmixList").split(",");
    } catch (error) {}
    if (
      this.props.catmix.isLoading ||
      this.props.catmix1.isLoading ||
      this.props.catmix2.isLoading ||
      this.props.catmix3.isLoading ||
      this.props.catmix4.isLoading
    ) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else if (
      this.props.catmix.errMess ||
      this.props.catmix1.errMess ||
      this.props.catmix2.errMess ||
      this.props.catmix3.errMess ||
      this.props.catmix4.errMess
    ) {
      return <div></div>;
    } else {
      try {
        return (
          <div style={{ marginTop: "50px" }}>
            <div className="container">
              <h3 style={{ marginBottom: "50px" }}>{arr[0]}</h3>
              <br />
              <div className="row">
                {this.props.catmix.catmix.DATA.map((p, index) => {
                  if (index < 4) {
                    return <ProductCard p={p} />;
                  }
                })}
              </div>
              <br />
              <h3 style={{ marginBottom: "50px" }}>{arr[1]}</h3>

              <div className="row">
                {this.props.catmix1.catmix1.DATA.map((p, index) => {
                  if (index < 4) {
                    return <ProductCard p={p} />;
                  }
                })}
              </div>
              <br />
              <h3 style={{ marginBottom: "50px" }}>{arr[2]}</h3>

              <div className="row">
                {this.props.catmix2.catmix2.DATA.map((p, index) => {
                  if (index < 4) {
                    return <ProductCard p={p} />;
                  }
                })}
              </div>
              <br />
              <h3 style={{ marginBottom: "50px" }}>{arr[3]}</h3>

              <div className="row">
                {this.props.catmix3.catmix3.DATA.map((p, index) => {
                  if (index < 4) {
                    return <ProductCard p={p} />;
                  }
                })}
              </div>
              <br />
              <h3 style={{ marginBottom: "50px" }}>{arr[4]}</h3>

              <div className="row">
                {this.props.catmix4.catmix4.DATA.map((p, index) => {
                  if (index < 4) {
                    return <ProductCard p={p} />;
                  }
                })}
              </div>
            </div>
          </div>
        );
      } catch (error) {
        return <div></div>;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catmix);
