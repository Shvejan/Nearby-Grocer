import React, { Component } from "react";
import "./css/Account.css";
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
import { fetchOrders } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => ({
  orders: state.orders,
});
const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (customer_id) => dispatch(fetchOrders(customer_id)),
});

class OrderList extends Component {
  render() {
    return (
      <div>
        <span>order id: {this.props.order.order_no}</span>
        <br />
        <span>order time: {this.props.order.order_date_time}</span>
        <br />
        <span>bill: Rs. {this.props.order.final_total}</span>
        <br />
        <span>Branch: {this.props.order.branch_name}</span>
        <br />
        <hr />
      </div>
    );
  }
}

class UserAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchOrders(285);
  }
  orderDetails = () => {
    if (this.props.orders.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          {this.props.orders.orders.DATA.map((order) => (
            <OrderList order={order} />
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
              <h1 className="checkoutHeader">Account</h1>
            </div>
            <div className="col-2"></div>
          </div>
          <Row>
            <Col sm="8">
              <Card>
                <CardHeader className="total">Order History</CardHeader>
                <CardBody>
                  <CardTitle className="total">{this.orderDetails()}</CardTitle>
                  <CardText></CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              {/*<Card>
                <CardHeader className="total">Bill</CardHeader>
                <CardBody>
                  <CardText style={{ color: "black" }}>
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
              </Card>*/}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddress);
