import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
class CatNav extends Component {
  componentDidMount() {
    try {
      document
        .getElementById(sessionStorage.getItem("selectedMainCat"))
        .scrollIntoView({ block: "center" });
    } catch (error) {
      //alert(error);
    }
  }
  render() {
    if (this.props.mainCat.isLoading) {
      return <Loading />;
    } else if (this.props.mainCat.isLoading) {
      return <div>{this.props.mainCat.isLoading}</div>;
    } else {
      return (
        <div class="scrollmenu">
          {this.props.mainCat.mainCat.DATA.map((c) => {
            if (sessionStorage.getItem("selectedMainCat") === c.category_name)
              return (
                <Link
                  to={`/categories/${c.category_id}`}
                  onClick={() => {
                    sessionStorage.setItem("selectedMainCat", c.category_name);
                  }}
                  key={c.category_name}
                >
                  <label
                    id={c.category_name}
                    key={c.category_name}
                    style={{ backgroundColor: "grey", margin: "0px" }}
                  >
                    {c.category_name}
                  </label>
                </Link>
              );
            else {
              return (
                <Link
                  to={`/categories/${c.category_id}`}
                  onClick={() => {
                    sessionStorage.setItem("selectedMainCat", c.category_name);
                  }}
                  key={c.category_name}
                >
                  <label id={c.category_name} key={c.category_name}>
                    {c.category_name}
                  </label>
                </Link>
              );
            }
          })}
        </div>
      );
    }
  }
}
export default CatNav;
