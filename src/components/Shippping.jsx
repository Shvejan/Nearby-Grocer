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
class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainDiv">
        <div className="container mainDiv">
          <div className="row">
            <div className="col-4">
              <NavLink to="/checkout" style={{ color: "#fff" }}>
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
              <h1 className="checkoutHeader">Shipping Details</h1>
            </div>
            <div className="col-2"></div>
          </div>
          <Row>
            <Col sm="8">
              <Card>
                <CardHeader className="total">Shipping Adderess</CardHeader>
                <CardBody>
                  <CardTitle className="total">
                    <div className="row">
                      <div className="col-6">
                        <span>Address 1 </span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardText></CardText>
                </CardBody>
                <CardFooter>
                  <span className="total">Total: </span>
                  <span className="total">Rs. 500</span>
                  <NavLink to="/shipping">
                    <Button className="placeOrder" color="warning">
                      Shipping Details
                    </Button>
                  </NavLink>
                </CardFooter>
              </Card>
            </Col>
            <Col sm="4">
              <Card>
                <CardHeader className="total">Bill</CardHeader>
                <CardBody>
                  <CardText></CardText>
                </CardBody>
                <CardFooter>
                  <Button color="primary">Place Order</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Shipping;
