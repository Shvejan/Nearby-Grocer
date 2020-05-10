import React, { Component } from "react";
import Header from "./Header";
import "./css/CategoryProducts.css";
import { fetchMainCat, fetchSubCat } from "../redux/ActionCreators";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import Products from "./Products";
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

const CatNav = (props) => {
  if (props.mainCat.isLoading) {
    return <Loading />;
  } else {
    return (
      <div class="scrollmenu">
        {props.mainCat.mainCat.DATA.map((c) => (
          <NavLink to={`/categories/${c.category_id}/subcategories`}>
            <a>{c.category_name}</a>
          </NavLink>
        ))}
      </div>
    );
  }
};

class SubCatNav extends Component {
  render() {
    if (this.props.subCat.isLoading) {
      return <Loading />;
    } else {
      return (
        <React.Fragment>
          <div class="scrollmenu">
            {this.props.subCat.subCat.DATA.map((s) => (
              <NavLink
                to={`/categories/${this.props.mainCat}/${s.sub_category_id}`}
              >
                <a>{s.sub_category_name}</a>
              </NavLink>
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

class CategoryProducts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const branch = sessionStorage.getItem("branch_id");
    this.props.fetchSubCat(branch, this.props.catId);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <CatNav mainCat={this.props.mainCat} />
        <SubCatNav subCat={this.props.subCat} mainCat={this.props.catId} />
        <div className="productsDiv">
          <div className="container">
            <Products
              branch_id={sessionStorage.getItem("branch_id")}
              subCatId={this.props.subCatId}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryProducts);
