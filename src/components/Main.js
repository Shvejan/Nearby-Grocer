import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
