import React, { Component } from "react";
import Header from "./Header";
import "./css/CategoryProducts.css";
import { fetchMainCat, fetchSubCat } from "../redux/ActionCreators";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Loading } from "./Loading";
import Products from "./Products";
import ScrollMenu from "react-horizontal-scrolling-menu";

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

const MenuItem = ({ text, selected }) => {
  return <div className="menu-item">{text}</div>;
};

export const Menu = (list) =>
  list.map((el) => {
    const { name } = el;

    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class CatNav extends Component {
  state = {
    selected: 0,
    list: [],
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };
  /*<div class="scrollmenu">
          {this.props.mainCat.mainCat.DATA.map((c) => (
            <NavLink to={`/categories/${c.category_id}/subcategories`}>
              <a>{c.category_name}</a>
            </NavLink>
          ))}
          </div>*/
  render() {
    if (this.props.mainCat.isLoading) {
      return <Loading />;
    } else {
      return (
        <div class="scrollmenu">
          {this.props.mainCat.mainCat.DATA.map((c) => (
            <NavLink to={`/categories/${c.category_id}/subcategories`}>
              <a>{c.category_name}</a>
            </NavLink>
          ))}
        </div>
      );
    }
  }
}

class SubCatNav extends Component {
  state = {
    selected: 0,
    list: [
      { name: "item1" },
      { name: "item2" },
      { name: "item3" },
      { name: "item4" },
      { name: "item5" },
      { name: "item6" },
      { name: "item7" },
      { name: "item8" },
      { name: "item9" },
    ],
  };

  onSelect = (key) => {
    this.setState({ selected: key });
  };

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
