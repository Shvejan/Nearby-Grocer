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
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { fetchOrders, fetchOrderdetails } from "../redux/ActionCreators";
import { Loading } from "./Loading";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const mapStateToProps = (state) => ({
  orders: state.orders,
  orderdetails: state.orderdetails,
});
const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (customer_id) => dispatch(fetchOrders(customer_id)),
  fetchOrderdetails: (order_id) => dispatch(fetchOrderdetails(order_id)),
});

class ProdList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <img
            src={this.props.p.image}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className="col-7">
          <Label>{this.props.p.product_name}</Label> <br />
          <Label>
            Quantity:
            {this.props.p.quantity}
          </Label>{" "}
          <br />
          <Label>
            Total Price:
            {this.props.p.amount}
          </Label>{" "}
        </div>
      </div>
    );
  }
}

class OrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
    this.props.fetchOrderdetails(this.props.order.order_id);
  };

  orderDetail = () => {
    if (this.props.orderdetails.isLoading) {
      return <Loading />;
    } else if (this.props.orderdetails.errMess) {
      return <p>No Orders Found</p>;
    } else {
      return (
        <ModalBody>
          <div className="container">
            <h6
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Branch Details
            </h6>
            <div className="row">
              <div className="col-1">
                <img
                  src={
                    "https://nearbygrocer.com/" +
                    this.props.orderdetails.orderdetails.DATA.branch_info.logo
                  }
                  alt="Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </div>
              <div className="col-7">
                <Label>
                  {
                    this.props.orderdetails.orderdetails.DATA.branch_info
                      .branch_name
                  }
                </Label>{" "}
                <Label>
                  PH:
                  {
                    this.props.orderdetails.orderdetails.DATA.branch_info
                      .contact_no
                  }
                </Label>{" "}
                <Label>
                  {
                    this.props.orderdetails.orderdetails.DATA.branch_info
                      .address
                  }
                </Label>
              </div>
            </div>
            <h6
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Order Details
            </h6>
            <Label>
              Order Number:
              {this.props.orderdetails.orderdetails.DATA.order_info.order_no}
            </Label>{" "}
            <br />
            <Label>
              Payment mode:
              {
                this.props.orderdetails.orderdetails.DATA.order_info
                  .payment_mode
              }
            </Label>{" "}
            <br />
            <Label>
              Date:
              {
                this.props.orderdetails.orderdetails.DATA.order_info
                  .order_date_time
              }
            </Label>
            <br />
            <Label>
              Sub total:
              {this.props.orderdetails.orderdetails.DATA.order_info.sub_total}
            </Label>
            <br />
            <Label>
              Shipping charges:
              {
                this.props.orderdetails.orderdetails.DATA.order_info
                  .shipping_charges
              }
            </Label>
            <h6
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              Products
            </h6>
            {this.props.orderdetails.orderdetails.DATA.product_list.map((p) => (
              <ProdList p={p} />
            ))}
          </div>
        </ModalBody>
      );
    }
  };
  render() {
    return (
      <div onClick={this.toggleModal} style={{ cursor: "pointer" }}>
        <span>order id: {this.props.order.order_no}</span>
        <br />
        <span>order time: {this.props.order.order_date_time}</span>
        <br />
        <span>bill: Rs. {this.props.order.final_total}</span>
        <br />
        <span>Branch: {this.props.order.branch_name}</span>
        <br />
        <hr />
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          scrollable={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader toggle={this.toggleModal}>Order details</ModalHeader>
          {this.orderDetail()}
        </Modal>
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
    this.props.fetchOrders(sessionStorage.getItem("userId"));
  }
  orderDetails = () => {
    if (this.props.orders.isLoading) {
      return <Loading />;
    } else if (
      this.props.orders.errMess ||
      this.props.orders.orders.MESSAGE === "NOT FOUND"
    ) {
      return (
        <div style={{ padding: "30px" }}>
          <p>No Orders Found</p>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {this.props.orders.orders.DATA.map((order) => (
            <OrderList
              order={order}
              fetchOrderdetails={this.props.fetchOrderdetails}
              orderdetails={this.props.orderdetails}
            />
          ))}
        </React.Fragment>
      );
    }
  };
  handleLogout = () => {
    sessionStorage.removeItem("userId");
  };
  render() {
    return (
      <React.Fragment>
        <Header />
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
                  alt=""
                />
              </div>
              <div className="col-6">
                <h1 className="checkoutHeader">Account</h1>
              </div>
              <div className="col-2">
                <NavLink to="/">
                  <Button className="clearCartbtn" onClick={this.handleLogout}>
                    Logout
                  </Button>
                </NavLink>
              </div>
            </div>
            <Row>
              <Col sm="8">
                <Card>
                  <CardHeader className="total">Order History</CardHeader>
                  <CardBody>
                    <CardTitle className="total">
                      {this.orderDetails()}
                    </CardTitle>
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
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddress);
