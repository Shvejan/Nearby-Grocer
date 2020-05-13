import React, { Component } from "react";
import image from "./images/orange.png";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import { fetchBrands } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import brandImg from "./images/only-background.png";
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
    if (this.props.brands.isLoading || !sessionStorage.getItem("pincode")) {
      return <Loading />;
    } else if (this.props.brands.errMess) {
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
  if (props.brand.image === null) {
    return (
      <div className="col-2">
        <Link to={"brands/" + props.brand.brand_id}>
          <Card inverse style={{ height: "100px" }}>
            <CardImg height="100%" src={brandImg} alt="Card image cap" />
          </Card>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="col-2">
        <Link to={"brands/" + props.brand.brand_id}>
          <Card inverse style={{ height: "100px" }}>
            <CardImg
              height="100%"
              src={props.brand.image}
              alt="Card image cap"
            />
          </Card>
        </Link>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBrands);
