import React, { Component } from "react";
import { Loading } from "./Loading";
import { NavLink } from "react-router-dom";

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
export default SubCatNav;
