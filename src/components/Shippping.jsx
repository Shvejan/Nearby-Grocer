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
import { fetchAddress } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => ({
  address: state.address,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAddress: (customer_id) => dispatch(fetchAddress(customer_id)),
});

class AddressList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <span>Address {this.props.index + 1} </span>
          <br />
          <span>{this.props.address.first_name} </span>
          <span>{this.props.address.last_name} </span>
          <br />
          <p>{this.props.address.line_1}</p>
        </div>
        <div className="col offset-3">
          <Input type="radio" name={this.props.index + 1} />
        </div>
      </div>
    );
  }
}

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAddress(285);
  }
  addressSection = () => {
    if (this.props.address.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          {this.props.address.address.DATA.map((address, index) => (
            <AddressList address={address} index={index} />
          ))}
        </React.Fragment>
      );
    }
  };
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
                    {this.addressSection()}
                  </CardTitle>
                  <CardText></CardText>
                </CardBody>
                <CardFooter>
                  <NavLink to="/shipping">
                    <Button className="placeOrder" color="warning">
                      Ship to this address
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

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
