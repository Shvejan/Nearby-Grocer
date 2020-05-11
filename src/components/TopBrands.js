import React, { Component } from "react";
import image from "./images/orange.png";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
class TopBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Top Brands</h1>
        <div className="row">
          <div className="col-3">
            <Card inverse style={{ height: "300px" }}>
              <CardImg height="100%" src={image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
          <div className="col-3">
            <Card inverse style={{ height: "300px" }}>
              <CardImg height="100%" src={image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>{" "}
          <div className="col-3">
            <Card inverse style={{ height: "300px" }}>
              <CardImg height="100%" src={image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
          <div className="col-3">
            <Card inverse style={{ height: "300px" }}>
              <CardImg height="100%" src={image} alt="Card image cap" />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBrands;
