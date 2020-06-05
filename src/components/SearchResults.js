import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import ProductCard from "./ProductCard";
import { fetchSearch } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchSearch: (branch_id, keyword, limit, pno) =>
    dispatch(fetchSearch(branch_id, keyword, limit, pno)),
});
class SearchResults extends Component {
  page = (pno) => {
    this.props.fetchSearch(
      sessionStorage.getItem("branch_id"),
      sessionStorage.getItem("searchKeyWord"),
      52,
      pno
    );
  };
  render() {
    if (this.props.search.isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }
    if (this.props.search.errMess) {
      return (
        <div>
          <Header />
          <div>{this.props.search.errMess}</div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <div className="productsDiv">
            <div className="container">
              <h5> Search Results</h5>

              <div className="row">
                {this.props.search.search.DATA.map((p) => (
                  <ProductCard p={p} />
                ))}
              </div>
            </div>
            <div style={{ marginLeft: "600px", marginTop: "100px" }}>
              <span>Page: </span>
              <span className="pno" onClick={() => this.page(0)}>
                1
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(1)}>
                2
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(2)}>
                3
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(3)}>
                4
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(4)}>
                5
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(5)}>
                6
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(6)}>
                7
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(7)}>
                8
              </span>
              <span> </span>
              <span className="pno" onClick={() => this.page(8)}>
                9
              </span>
              <span> </span>

              <span className="pno" onClick={() => this.page(9)}>
                10
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
