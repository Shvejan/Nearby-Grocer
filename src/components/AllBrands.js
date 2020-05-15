import React, { Component } from "react";
import Header from "./Header";
import TopBrands from "./TopBrands";
class AllBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <TopBrands />
      </React.Fragment>
    );
  }
}

export default AllBrands;
//export default connect(mapStateToProps, mapDispatchToProps)(AllBrands);
