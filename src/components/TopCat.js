import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "reactstrap";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};

class TopCat extends Component {
  render() {
    if (this.props.mainCat.isLoading) {
      return <Loading />;
    } else if (this.props.mainCat.errMess) {
      return <h3>Products not avaliable</h3>;
    }

    return (
      <div className="productsDiv">
        <div
          className="container"
          style={{ "margin-top": "100px", "margin-bottom": "100px" }}
        >
          <h3 style={{ marginBottom: "50px" }}>Top Categories</h3>
          <div>
            <div className="row">
              {this.props.mainCat.mainCat.DATA.map((c) => {
                if (c.image)
                  return (
                    <div className="col-3" style={{ marginBottom: "20px" }}>
                      <Link
                        to={`/categories/${c.category_id}/subcategories`}
                        style={{ textDecoration: "none", fontSize: "15px" }}
                      >
                        <Card style={{ width: "200px", height: "200px" }}>
                          <div className="align-items-center">
                            <img
                              src={c.image}
                              style={{ width: "199px", height: "199px" }}
                            />
                          </div>
                        </Card>
                      </Link>
                      <h6>{c.category_name}</h6>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//export default TopCat;

export default connect(mapStateToProps)(TopCat);
