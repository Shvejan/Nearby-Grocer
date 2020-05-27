import WhyChoose from "./WhyChoose";
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
const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slide />
        <TopCat />
        <TopBrands />
        <div className="justify-content-center">
          <NavLink to="/allbrands/1">
            <Button color="primary" style={{ marginLeft: "600px" }}>
              View More
            </Button>
          </NavLink>
        </div>
        <Catmix />
        <WhyChoose />
        <Footer />
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps)(Home);
//        <CatNav mainCat={this.props.mainCat} />
