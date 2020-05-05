import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import green from "./images/green.png";
import back from "./images/blue.png";
import orange from "./images/orange.png";
import amul from "./images/amul.jpg";
import oil from "./images/oil.jpg";
import drink from "./images/drink.jpg";
import TopCat from "./TopCat";

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
    };
  }
  render() {
    const card = (p) => (
      <div className="col-3 justify-content-center">
        <Card>
          <CardImg
            top
            width="20%"
            height="190px"
            src={p.image}
            alt="Card image cap"
          />
          <CardBody>
            <h6 className="cardText">{p.title}</h6>
            <h6 className="cardText" style={{ color: "#e78536" }}>
              {p.desc}
            </h6>
            <h6>{p.price}</h6>
          </CardBody>
        </Card>
        <button className="product-btn">ADD</button>
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
        <div className="col-3">
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
