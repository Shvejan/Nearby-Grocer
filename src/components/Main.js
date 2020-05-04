import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slides from "./Slide";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slides />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
