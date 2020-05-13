import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Loading } from "./Loading";
class CatNav extends Component {
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
export default CatNav;
