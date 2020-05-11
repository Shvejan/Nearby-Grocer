import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Loading } from "./Loading";
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.search.isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    } else {
      return (
        <div style={{ backgroundColor: "#bbbbbb" }}>
          <Header />

          <h3>search relsufhd</h3>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(SearchResults);
