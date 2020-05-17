import React, { Component, useState } from "react";
import "./css/Checkout.css";
import logo from "./images/logo-big.png";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Collapse,
  Row,
  Col,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "reactstrap";
import {
  fetchAddress,
  fetchShipcharges,
  placeOrder,
  fetchTimeslots,
} from "../redux/ActionCreators";
import Switch from "react-switch";
import { Loading } from "./Loading";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const mapStateToProps = (state) => ({
  address: state.address,
  shipcharges: state.shipcharges,
  cart: state.cart,
  timeslots: state.timeslots,
});
const mapDispatchToProps = (dispatch) => ({
  fetchAddress: (customer_id) => dispatch(fetchAddress(customer_id)),
  fetchTimeslots: (branch_id) => dispatch(fetchTimeslots(branch_id)),

  fetchShipcharges: (branch_id, pincode, cart_id) =>
    dispatch(fetchShipcharges(branch_id, pincode, cart_id)),
  placeOrder: (
    branch_id,
    customer_id,
    cart_id,
    shipping_address_id,
    shipping_charges,
    payment_mode,
    order_channel,
    order_notes,
    time_slot,
    preference
  ) =>
    dispatch(
      placeOrder(
        branch_id,
        customer_id,
        cart_id,
        shipping_address_id,
        shipping_charges,
        payment_mode,
        order_channel,
        order_notes,
        time_slot,
        preference
      )
    ),
});

class AddressList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <span>Address {this.props.index + 1} </span>
          <br />
          <span>{this.props.address.first_name} </span>
          <span>{this.props.address.last_name} </span>
          <br />
          <span>{this.props.address.pincode}</span>
          <p>{this.props.address.line_1}</p>
          <hr />
        </div>
        <div className="col offset-3">
          <Input
            type="radio"
            name="address"
            onClick={() => {
              sessionStorage.setItem(
                "shipping_address_id",
                this.props.address.shipping_address_id
              );
              this.props.fetchcharges(
                sessionStorage.getItem("branch_id"),
                this.props.address.pincode,
                sessionStorage.getItem("cart_id")
              );
            }}
          />
        </div>
      </div>
    );
  }
}

const AddressSection = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        Shipping Adderess
      </Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            <CardTitle className="total">{props.addressSection()}</CardTitle>
            <CardText></CardText>
          </CardBody>
          <CardFooter>
            <NavLink to="/shipping">
              <Button className="placeOrder" color="warning" onClick={toggle}>
                Continue >
              </Button>
            </NavLink>
          </CardFooter>
        </Card>
      </Collapse>
    </div>
  );
};
const TimeSlots = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem", width: "100%" }}
      >
        Shipping Timings
      </Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            <CardTitle className="total">{props.renderTimeslots()}</CardTitle>
            <div class="btn-group" data-toggle="buttons">
              <label
                class="btn btn-primary"
                onClick={() => {
                  sessionStorage.setItem("order_pref", "home delevery");
                }}
              >
                <input type="radio" name="options" id="option1" checked /> Home
                Delivery
              </label>
              <label
                class="btn btn-primary"
                onClick={() => {
                  sessionStorage.setItem("order_pref", "store pickup");
                }}
              >
                <input type="radio" name="options" id="option2" /> Store Pickup
              </label>
            </div>
          </CardBody>
          <CardFooter>
            <NavLink to="/shipping">
              <Button className="placeOrder" color="warning" onClick={toggle}>
                Continue >
              </Button>
            </NavLink>
          </CardFooter>
        </Card>
      </Collapse>
    </div>
  );
};
const Times = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <span>
            {props.time.start_time}-{props.time.end_time}
          </span>
          <hr />
        </div>
        <div className="col offset-3">
          <Input
            type="radio"
            name="time"
            onClick={() => {
              sessionStorage.setItem(
                "timeslot",
                `${props.time.start_time}-${props.time.end_time}`
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

class Shipping extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchAddress(285);
    this.props.fetchTimeslots(sessionStorage.getItem("branch_id"));
  }
  addressSection = () => {
    if (this.props.address.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          {this.props.address.address.DATA.map((address, index) => (
            <AddressList
              address={address}
              index={index}
              fetchcharges={this.props.fetchShipcharges}
            />
          ))}
        </React.Fragment>
      );
    }
  };
  shippingCharges = () => {
    if (this.props.shipcharges.isLoading) {
      return <span>Select address</span>;
    } else if (this.props.shipcharges.shipcharges.STATUS === "Failure") {
      return <span>{this.props.shipcharges.shipcharges.MESSAGE}</span>;
    } else {
      return (
        <span>
          shipping charges:{" "}
          {this.props.shipcharges.shipcharges.DATA.shipping_charges}
        </span>
      );
    }
  };
  placeOrder = () => {
    if (
      sessionStorage.getItem("cart_id") !== "" &&
      sessionStorage.getItem("shipping_address_id") !== "" &&
      sessionStorage.getItem("timeslot") !== ""
    ) {
      this.props.placeOrder(
        sessionStorage.getItem("branch_id"),
        285,
        sessionStorage.getItem("cart_id"),
        sessionStorage.getItem("shipping_address_id"),
        this.props.shipcharges.shipcharges.DATA.shipping_charges,
        "COD",
        "Web",
        document.getElementById("note").value,
        sessionStorage.getItem("timeslot"),
        sessionStorage.getItem("order_pref")
      );
    } else {
      alert("select an address and timeslot");
    }
  };

  renderTimeslots = () => {
    if (this.props.timeslots.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          {this.props.timeslots.timeslots.DATA.map((timeslot) => (
            <Times time={timeslot} />
          ))}
          <Input placeholder="leave a note" id="note" type="text" />
        </React.Fragment>
      );
    }
  };

  render() {
    let total = 0;
    this.props.cart.products.map((p) => {
      total += p.product.selling_price * p.quantity;
    });
    return (
      <React.Fragment>
        <Header />
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
                  <AddressSection addressSection={this.addressSection} />
                  <TimeSlots renderTimeslots={this.renderTimeslots} />
                </Card>
              </Col>
              <Col sm="4">
                <Card>
                  <CardHeader className="total">Bill</CardHeader>
                  <CardBody>
                    <CardText style={{ color: "black" }}>
                      <span>Products Total : </span>
                      {total}
                    </CardText>
                    <CardText style={{ color: "red" }}>
                      <span>Shipping Charges: </span>
                      {this.shippingCharges()}
                    </CardText>
                  </CardBody>
                  <CardFooter>
                    <NavLink to="/">
                      <Button color="primary" onClick={this.placeOrder}>
                        Place Order
                      </Button>
                    </NavLink>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);
