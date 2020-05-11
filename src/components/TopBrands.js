import React, { Component } from "react";
import image from "./images/orange.png";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import { fetchBrands } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Loading } from "./Loading";
const mapStateToProps = (state) => {
  return {
    brands: state.brands,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchBrands: (branch_id, limit) => dispatch(fetchBrands(branch_id, limit)),
});

class TopBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //this.props.fetchBrands(sessionStorage.getItem("branch_id"), 12);
  }
  render() {
    if (this.props.brands.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          <h1>Top Brands</h1>
          <div className="row">
            {this.props.brands.brands.DATA.map((b) => (
              <BrandsCard brand={b} />
            ))}
          </div>
        </div>
      );
    }
  }
}
const BrandsCard = (props) => {
  return (
    <div className="col-2">
      <Card inverse style={{ height: "100px" }}>
        <CardImg height="100%" src={props.brand.image} alt="Card image cap" />
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBrands);
