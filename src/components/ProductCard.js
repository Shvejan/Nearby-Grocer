import React, { Component } from "react";

import {
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  Badge,
} from "reactstrap";
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
    } else {
      alert("out of stock");
    }
  };
  handleSub = () => {
    this.setState({ quantity: this.state.quantity - 1 });
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
            "background-color": "#41ada4",
            width: "80px",
            height: "30px",
            color: "white",
            border: "0px",
            "border-radius": "5px",
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
              "background-color": "#41ada4",
              width: "30px",
              height: "30px",
              color: "white",
              border: "0px",
              "border-radius": "5px",
            }}
          >
            -
          </button>
          <button
            style={{
              "background-color": "#fff",
              width: "30px",
              height: "30px",
              color: "black",
              border: "0px",
              "border-radius": "5px",
            }}
          >
            {this.state.quantity}
          </button>
          <button
            onClick={this.handleAdd}
            style={{
              "background-color": "#41ada4",
              width: "30px",
              height: "30px",
              color: "white",
              border: "0px",
              "border-radius": "5px",
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
      <div className="col-sm-3" style={{ "margin-bottom": "50px" }}>
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
                "text-align": "center",
              }}
            >
              <img
                top
                src={this.props.p.image}
                alt="Card image cap"
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
                  alt="Card image cap"
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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default ProductCard;
