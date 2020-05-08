import React, { Component } from "react";
import { Card, CardBody, Modal, ModalHeader, ModalBody } from "reactstrap";
class SubProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-3" style={{ "margin-bottom": "50px" }}>
          <div onClick={this.toggleModal}>
            <Card style={{ height: "18rem" }}>
              <div
                style={{
                  height: "200px",
                  width: "180px",
                  "text-align": "center",
                }}
              >
                <img
                  top
                  src={this.props.product.image}
                  alt="Card image cap"
                  className="hoverImages"
                />
              </div>

              <CardBody>
                <h6 className="cardText" style={{ height: "30px" }}>
                  {this.props.product.title}
                </h6>
                <h6
                  className="cardText"
                  style={{ color: "#e78536", height: "30px" }}
                >
                  <span
                    class="fa fa-percent"
                    style={{ "margin-right": "5px" }}
                  ></span>
                  {this.props.product.desc}
                </h6>
                <h6>{this.props.product.price}</h6>
              </CardBody>
            </Card>
            <button className="sub-product-btn">ADD</button>
          </div>
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
                  src={this.props.product.image}
                  alt="Card image cap"
                ></img>
              </div>
              <div className="col offset-1">
                <h5>{this.props.product.title}</h5>
                <h6
                  className="cardText"
                  style={{ color: "#e78536", height: "30px" }}
                >
                  <span
                    class="fa fa-percent"
                    style={{ "margin-right": "5px" }}
                  ></span>
                  {this.props.product.desc}
                </h6>
                <button
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
      </React.Fragment>
    );
  }
}

export default SubProductCard;
