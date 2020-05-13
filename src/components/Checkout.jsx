import React, { Component } from "react";
import "./css/Checkout.css";
import logo from "./images/logo-big.png";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { cartAdd, cartRemove, cartClear } from "../redux/ActionCreators";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  cartAdd: (data) => dispatch(cartAdd(data)),
  cartRemove: (id) => dispatch(cartRemove(id)),
  cartClear: () => dispatch(cartClear()),
});

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row" style={{ color: "black" }}>
        <div className="col-6">
          <span>{this.props.product.product.product_name} </span>
        </div>
        <div className="col">
          <span>{this.props.product.product.selling_price}</span>
        </div>
        <div className="col">
          <span>{this.props.product.quantity} </span>
        </div>
        <div className="col">
          <span>
            {this.props.product.product.selling_price *
              this.props.product.quantity}
          </span>
        </div>
      </div>
    );
  }
}

class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="container mainDiv">
          <div className="row">
            <div className="col-4">
              <NavLink to="/" style={{ color: "#fff" }}>
                <span
                  className="fa fa-arrow-left fa-10x"
                  style={{ marginRight: "50px" }}
                >
                  Go back
                </span>
              </NavLink>
              <img
                src={logo}
                className="fluid"
                style={{ width: 150, height: 75, marginTop: "50px" }}
              />
            </div>
            <div className="col-6">
              <h1 className="checkoutHeader">Let's review your order</h1>
            </div>
            <div className="col-2">
              <Button className="clearCartbtn" onClick={this.props.cartClear}>
                Clear Cart
              </Button>
            </div>
          </div>
          <Row>
            <Col sm="8">
              <Card>
                <CardHeader className="total">Cart items</CardHeader>
                <CardBody>
                  <CardTitle className="total">
                    <div className="row">
                      <div className="col-6">
                        <span>Product </span>
                      </div>
                      <div className="col">
                        <span>Unit Price </span>
                      </div>
                      <div className="col">
                        <span>Quantity </span>
                      </div>
                      <div className="col">
                        <span> Price</span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardText>
                    {this.props.cart.products.map((p) => (
                      <ProductsList product={p} />
                    ))}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <span className="total">Total: </span>
                  <span className="total">Rs. 500</span>
                  <Button className="placeOrder" color="warning">
                    Shipping Details
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col sm="4">
              {/* <Card>
                <CardHeader className="total">Shipping Address</CardHeader>
                <CardBody>
                  <CardText>
                    <FormGroup>
                      <Input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Name"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Address"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="number"
                        id="pincode"
                        name="pincode"
                        placeholder="Pincode"
                        innerRef={(input) => (this.username = input)}
                      />
                    </FormGroup>
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Button color="primary">Delever to this address</Button>
                </CardFooter>
              </Card>*/}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
