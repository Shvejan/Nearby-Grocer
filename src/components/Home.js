import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Slide from "./Slide";
import Header from "./Header";
import Footer from "./Footer";
import TopCat from "./TopCat";
import TopBrands from "./TopBrands";
import Catmix from "./Catmix";
import LoadingPage from "./LoadingPage";
const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
    banners: state.banners,
  };
};
class Home extends Component {
  render() {
    if (this.props.banners.isLoading) {
      return (
        <React.Fragment>
          <div style={{ display: "none" }}>
            <Header />
          </div>
          <LoadingPage />
        </React.Fragment>
      );
    }
    if (this.props.banners.errMess) {
      return (
        <React.Fragment>
          <div>{this.props.banners.errMess}</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Header />
        <Slide />
        <TopCat />
        <TopBrands />
        <div className="justify-content-center m-5">
          <NavLink to="/allbrands/1">
            <Button color="primary" style={{ marginLeft: "600px" }}>
              View More
            </Button>
          </NavLink>
        </div>
        <Catmix />
        <Footer />
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps)(Home);
//        <CatNav mainCat={this.props.mainCat} />
