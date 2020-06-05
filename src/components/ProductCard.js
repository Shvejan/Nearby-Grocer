import React, { Component } from "react";

import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Badge,
} from "reactstrap";
import { cartAdd, cartRemove } from "../redux/ActionCreators";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  cartAdd: (data) => dispatch(cartAdd(data)),
  cartRemove: (id) => dispatch(cartRemove(id)),
});
class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      quantity: 0,
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  handleAdd = () => {
    if (this.state.quantity < this.props.p.quantity) {
      this.setState({ quantity: this.state.quantity + 1 });
      const data = {
        id: this.props.p.product_id,
        product: this.props.p,
        quantity: this.state.quantity + 1,
      };
      this.props.cartAdd(data);
    } else {
      alert("Maximum quantity reached");
    }
  };
  handleSub = () => {
    this.setState({ quantity: this.state.quantity - 1 });
    this.props.cartRemove(this.props.p.product_id);
  };

  discount = () => {
    if (this.props.p.mrp - this.props.p.selling_price) {
      return (
        <Badge color="success">
          {Math.round(
            ((this.props.p.mrp - this.props.p.selling_price) /
              this.props.p.mrp) *
              100
          )}
          %
        </Badge>
      );
    }
  };

  buttons = () => {
    if (this.state.quantity === 0) {
      return (
        <button
          onClick={this.handleAdd}
          style={{
            backgroundColor: "#41ada4",
            width: "80px",
            height: "30px",
            color: "white",
            border: "0px",
            borderRadius: "5px",
          }}
        >
          ADD
        </button>
      );
    } else {
      return (
        <div>
          <button
            onClick={this.handleSub}
            style={{
              backgroundColor: "#41ada4",
              width: "30px",
              height: "30px",
              color: "white",
              border: "0px",
              borderRadius: "5px",
            }}
          >
            -
          </button>
          <button
            style={{
              backgroundColor: "#fff",
              width: "30px",
              height: "30px",
              color: "black",
              border: "0px",
              borderRadius: "5px",
            }}
          >
            {this.state.quantity}
          </button>
          <button
            onClick={this.handleAdd}
            style={{
              backgroundColor: "#41ada4",
              width: "30px",
              height: "30px",
              color: "white",
              border: "0px",
              borderRadius: "5px",
            }}
          >
            +
          </button>
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="col-sm-3"
        style={{ marginBottom: "50px" }}
        key={this.props.p.product_id}
      >
        <div>
          <Card
            style={{ height: "18rem", width: "13rem" }}
            onClick={this.toggleModal}
          >
            <h6>{this.discount()}</h6>
            <div
              style={{
                height: "200px",
                width: "180px",
                textAlign: "center",
              }}
            >
              <img
                top
                src={this.props.p.image}
                alt="Card"
                className="hoverImages"
              />
            </div>

            <CardBody>
              <h6 className="cardText" style={{ height: "30px" }}>
                {this.props.p.product_name}
              </h6>
              <h6
                className="cardText"
                style={{ color: "#7fd638", height: "30px" }}
              >
                Rs. {this.props.p.selling_price}
              </h6>
            </CardBody>
          </Card>
          <div style={{ marginLeft: "60px" }}>{this.buttons()}</div>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          scrollable={true}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalHeader toggle={this.toggleModal}>Product details</ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-3">
                <img
                  height="150px"
                  width="150px"
                  src={this.props.p.image}
                  alt="Card"
                ></img>
              </div>
              <div className="col offset-1">
                <h5>{this.props.p.product_name}</h5>
                <h6
                  className="cardText"
                  style={{ color: "#e78536", height: "30px" }}
                >
                  Rs. {this.props.p.selling_price}
                </h6>
                {this.buttons()}
              </div>
            </div>
            <hr />
            <h6 style={{ fontWeight: "bold", color: "#41ada4" }}>
              Product Description
            </h6>
            <p>{this.props.p.product_description}</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
/*{
            "product_id": "4086",
            "product_name": "LIJJAT PUNJ MASA PAPAD 200GM",
            "upc_code": "",
            "product_description": "",
            "product_specification": "",
            "keywords": null,
            "status": "1",
            "variant_code": "",
            "product_type": "Simple",
            "variants": [],
            "mrp": "72.00",
            "selling_price": "68.40",
            "quantity": 22,
            "image": "http://nearbygrocer.com/images/product/prod4086.jpg"
        },*/
