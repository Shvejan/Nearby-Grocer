import React, { Component } from "react";
import amul from "../images/amul.jpg";
import oil from "../images/oil.jpg";
import drink from "../images/drink.jpg";
import SubProductCard from "./SubProductCard";
class SubProducts extends Component {
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
    return (
      <div className="row ">
        <div className="col-sm-3">
          <div>
            <button className="subCatButton">Category 1</button>
          </div>

          <div>
            <button className="subCatButton">Category 2</button>
          </div>
          <div>
            <button className="subCatButton">Category 3</button>
          </div>
          <div>
            <button className="subCatButton">Category 4 </button>
          </div>
        </div>
        <div className="col-sm">
          <div className="row ">
            {this.state.products.map((p) => (
              <SubProductCard product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SubProducts;
