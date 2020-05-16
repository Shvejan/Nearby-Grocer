import React, { Component } from "react";
import Header from "./Header";
import TopBrands from "./TopBrands";
import { fetchBrands } from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const mapStateToProps = (state) => {
  return {
    brands: state.brands,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchBrands: (branch_id, limit, page_no) =>
    dispatch(fetchBrands(branch_id, limit, page_no)),
});

class AllBrands extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchBrands(
      sessionStorage.getItem("branch_id"),
      42,
      this.props.p_no
    );
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <TopBrands />
        <div style={{ marginLeft: "600px", marginTop: "100px" }}>
          <span>Page: </span>
          <Link to="/allbrands/1">
            <span>1</span>
          </Link>

          <span> </span>
          <Link to="/allbrands/2">
            <span>2</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/3">
            <span>3</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/4">
            <span>4</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/5">
            <span>5</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/6">
            <span>6</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/7">
            <span>7</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/8">
            <span>8</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/9">
            <span>9</span>
          </Link>
          <span> </span>
          <Link to="/allbrands/10">
            <span>10</span>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

//export default AllBrands;

export default connect(mapStateToProps, mapDispatchToProps)(AllBrands);
