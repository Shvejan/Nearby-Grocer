import React, { Component } from "react";
import { Card, CardImg, CardBody } from "reactstrap";
class SubProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-3" style={{ "margin-bottom": "50px" }}>
        <Card style={{ height: "18rem" }}>
          <CardImg
            top
            height="150px"
            src={this.props.product.image}
            alt="Card image cap"
          />
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
    );
  }
}

export default SubProductCard;
