import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardSubtitle,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import green from "./images/green.png";
import back from "./images/blue.png";
import orange from "./images/orange.png";
import amul from "./images/amul.jpg";
import oil from "./images/oil.jpg";
import drink from "./images/drink.jpg";
import TopCat from "./TopCat";
import { FadeTransform } from "react-animation-components";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          title: "Amul Pasteurised Butter - 500 Gm",
          desc: "Super Price Rs.219 Code Star5",
          price: "₹12.99",
          image: amul,
        },
        {
          title: "Sunday Sunflower Oil Pouch - 1 Ltr",
          desc: "Super Price Rs.105 Code Star5",
          price: "₹111.00",
          image: oil,
        },
        {
          title: "Dutchie Strawberry - 200 Ml",
          desc: "Buy 2 Get 1 Free",
          price: "₹24.93",
          image: drink,
        },
      ],
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  render() {
    const card = (p) => (
      <div
        className="col-12 col-sm-3 justify-content-center"
        onClick={this.toggleModal}
      >
        <Card style={{ height: "19rem" }}>
          <div
            style={{
              height: "180px",
              width: "180px",
              "text-align": "center",
            }}
          >
            <img
              top
              src={p.image}
              alt="Card image cap"
              className="hoverImagesHome"
            />
          </div>

          <CardBody>
            <h6 className="cardText" style={{ height: "30px" }}>
              {p.title}
            </h6>
            <h6
              className="cardText"
              style={{ color: "#e78536", height: "30px" }}
            >
              <span
                class="fa fa-percent"
                style={{ "margin-right": "5px" }}
              ></span>
              {p.desc}
            </h6>
            <h6>{p.price}</h6>
          </CardBody>
        </Card>
        <button className="product-btn">ADD</button>
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
                <img height="150px" src={p.image} alt="Card image cap"></img>
              </div>
              <div className="col offset-1">
                <h5>{p.title}</h5>
                <h6
                  className="cardText"
                  style={{ color: "#e78536", height: "30px" }}
                >
                  <span
                    class="fa fa-percent"
                    style={{ "margin-right": "5px" }}
                  ></span>
                  {p.desc}
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
      </div>
    );
    return <React.Fragment>{this.state.products.map(card)}</React.Fragment>;
  }
}

class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row" style={{ "padding-top": "100px" }}>
        <h3 className="col-3 mainhead">{this.props.cat.title}</h3>
        <hr
          className="col-7 line"
          style={{
            "border-top": "1px solid rgb(207, 190, 190)",
            "margin-top": "20px",
          }}
        />
        <h6 className="col-1" style={{ "margin-top": "9px" }}>
          View All
        </h6>
        <div className="col-12 col-sm-3">
          <Card inverse>
            <CardImg
              height="300px"
              src={this.props.cat.back}
              alt="Card image cap"
            />
            <CardImgOverlay>
              <div className="p-4 justify-content-center">
                <CardTitle>
                  <h4>{this.props.cat.title}</h4>
                </CardTitle>
                <CardText>
                  {this.props.cat.desc}
                  <p>
                    <button className="cardButton">View All</button>
                  </p>
                </CardText>
              </div>
            </CardImgOverlay>
          </Card>
        </div>
        <Products />
      </div>
    );
  }
}

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Category1: {
        title: "Best Price Ever",
        desc: "Find the best deals on your favourite products",
        back: back,
      },
      Category2: {
        title: "Buy and get Free",
        desc: "Grocer shopping couldn't be more fun",
        back: orange,
      },
      Category3: {
        title: "Save Max",
        desc: "Handpicked deals with best prices.",
        back: green,
      },
    };
  }
  render() {
    return (
      <div className="productsDiv">
        <div className="container">
          <RenderList cat={this.state.Category1} />
          <TopCat />
          <RenderList cat={this.state.Category2} />
          <RenderList cat={this.state.Category3} />
        </div>
      </div>
    );
  }
}

export default AllProducts;
