import React, { Component } from "react";
import Header from "./Header";
import "./css/CategoryProducts.css";
import { fetchMainCat, fetchSubCat } from "../redux/ActionCreators";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import Products from "./Products";
import CatNav from "./CatNav";
const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
    subCat: state.subCat,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMainCat: (branch_id) => dispatch(fetchMainCat(branch_id)),
  fetchSubCat: (branch_id, category_id) =>
    dispatch(fetchSubCat(branch_id, category_id)),
});

class SubCatNav extends Component {
  render() {
    if (this.props.subCat.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          <div class="scrollmenu">
            {this.props.subCat.subCat.DATA.map((s) => {
              if (
                sessionStorage.getItem("selectedSubcat") === s.sub_category_name
              )
                return (
                  <NavLink
                    to={`/categories/${this.props.mainCat}/${s.sub_category_id}`}
                  >
                    <label
                      key={s.sub_category_name}
                      style={{ backgroundColor: "grey", margin: "0px" }}
                      onClick={() => {
                        sessionStorage.setItem(
                          "selectedSubcat",
                          s.sub_category_name
                        );
                      }}
                    >
                      {s.sub_category_name}
                    </label>
                  </NavLink>
                );
              else {
                return (
                  <NavLink
                    to={`/categories/${this.props.mainCat}/${s.sub_category_id}`}
                  >
                    <label
                      key={s.sub_category_name}
                      onClick={() => {
                        sessionStorage.setItem(
                          "selectedSubcat",
                          s.sub_category_name
                        );
                      }}
                    >
                      {s.sub_category_name}
                    </label>
                  </NavLink>
                );
              }
            })}
          </div>
        </React.Fragment>
      );
    }
  }
}

class CategoryProducts extends Component {
  componentDidMount() {
    const branch = sessionStorage.getItem("branch_id");
    this.props.fetchSubCat(branch, this.props.catId);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <CatNav mainCat={this.props.mainCat} />
        <hr className="line" />
        <SubCatNav subCat={this.props.subCat} mainCat={this.props.catId} />
        <div className="productsDiv">
          <div className="container">
            <Products
              branch_id={sessionStorage.getItem("branch_id")}
              subCatId={this.props.subCatId}
              mainCat={this.props.catId}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);
