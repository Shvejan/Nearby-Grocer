import React, { Component } from "react";
import Header from "./Header";
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <h4>Your search results</h4>
      </React.Fragment>
    );
  }
}

export default SearchResults;
