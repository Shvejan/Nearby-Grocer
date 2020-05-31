import React, { Component } from "react";
import logo from "./images/logo-big.png";
import { Spinner } from "react-bootstrap";
import "./css/LoadingPage.css";
export default class LoadingPage extends Component {
  render() {
    return (
      <div className="loadingPage" style={{ justifyContent: "center" }}>
        <div>
          <img
            src={logo}
            className="fluid"
            style={{ width: 300, height: 125, margin: "20px" }}
            alt=""
          />
          <div className="row">
            <Spinner
              animation="border"
              style={{
                marginLeft: "100px",
                marginRight: "30px",
                marginTop: "5px",
              }}
            />
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }
}
