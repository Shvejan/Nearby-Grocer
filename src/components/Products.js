import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, productsClear } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import { Redirect } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
const mapStateToProps = (state) => ({
  products: state.products,
});
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (branch_id, sub_category_id) =>
    dispatch(fetchProducts(branch_id, sub_category_id)),
  productsClear: () => dispatch(productsClear()),
});

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchProducts(this.props.branch_id, this.props.subCatId);
  }
  render() {
    if (isNaN(this.props.subCatId)) {
      return <h3>Select a sub category</h3>;
    } else {
      if (this.props.products.isLoading) {
        return <Loading />;
      } else {
        if (this.props.products.products.STATUS === "Failure")
          return <h3>No Products avaliable</h3>;
        return (
          <div className="row">
            {this.props.products.products.DATA.map((p) => (
              <ProductCard p={p} />
            ))}
          </div>
        );
      }
    }
  }
}
const ProductCard = (props) => {
  return (
    <div className="col-sm-3" style={{ "margin-bottom": "50px" }}>
      <div>
        <Card style={{ height: "18rem", width: "13rem" }}>
          <div
            style={{
              height: "200px",
              width: "180px",
              "text-align": "center",
            }}
          >
            <img
              top
              src={props.p.image}
              alt="Card image cap"
              className="hoverImages"
            />
          </div>

          <CardBody>
            <h6 className="cardText" style={{ height: "30px" }}>
              {props.p.product_name}
            </h6>
            <h6
              className="cardText"
              style={{ color: "#7fd638", height: "30px" }}
            >
              <span
                class="fas fa-rupee-sign"
                style={{ "margin-right": "5px" }}
              ></span>
              {props.p.mrp}
            </h6>
          </CardBody>
        </Card>
        <button className="sub-product-btn">ADD</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
