/* eslint-disable array-callback-return */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "reactstrap";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};

class TopCat extends Component {
  viewMore = () => {
    document.getElementById("hide").style.display = "inline";
    document.getElementById("viewMorBtn").style.display = "none";
    document.getElementById("viewLesBtn").style.display = "inline";
  };
  viewLess = () => {
    document.getElementById("hide").style.display = "none";
    document.getElementById("viewMorBtn").style.display = "inline";
    document.getElementById("viewLesBtn").style.display = "none";
  };
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
          style={{ "margin-top": "20px", "margin-bottom": "100px" }}
        >
          <h3 style={{ marginBottom: "50px" }}>Top Categories</h3>
          <div>
            <div className="row">
              {this.props.mainCat.mainCat.DATA.map((c, index) => {
                if (c.image) {
                  if (index <= 12)
                    return (
                      <div className="col-3" style={{ marginBottom: "20px" }}>
                        <Link
                          to={`/categories/${c.category_id}/subcategories`}
                          style={{ textDecoration: "none", fontSize: "15px" }}
                        >
                          <Card
                            style={{ width: "200px", height: "200px" }}
                            onClick={() =>
                              sessionStorage.removeItem("selectedMainCat")
                            }
                          >
                            <div className="align-items-center">
                              <img
                                src={c.image}
                                style={{ width: "199px", height: "199px" }}
                                alt=""
                              />
                            </div>
                          </Card>
                        </Link>
                        <h6>{c.category_name}</h6>
                      </div>
                    );
                }
              })}
            </div>
          </div>
          <div id="hide" style={{ display: "none" }}>
            <div className="row">
              {this.props.mainCat.mainCat.DATA.map((c, index) => {
                if (c.image) {
                  if (index > 12)
                    return (
                      <div className="col-3" style={{ marginBottom: "20px" }}>
                        <Link
                          to={`/categories/${c.category_id}/subcategories`}
                          style={{ textDecoration: "none", fontSize: "15px" }}
                        >
                          <Card
                            style={{ width: "200px", height: "200px" }}
                            onClick={() =>
                              sessionStorage.removeItem("selectedMainCat")
                            }
                          >
                            <div className="align-items-center">
                              <img
                                src={c.image}
                                style={{ width: "199px", height: "199px" }}
                                alt=""
                              />
                            </div>
                          </Card>
                        </Link>
                        <h6>{c.category_name}</h6>
                      </div>
                    );
                }
              })}
            </div>
          </div>
          <div className="justify-content-center">
            <Button
              id="viewMorBtn"
              color="primary"
              style={{ marginLeft: "500px" }}
              onClick={this.viewMore}
            >
              View More
            </Button>
            <Button
              id="viewLesBtn"
              color="primary"
              style={{ marginLeft: "500px", display: "none" }}
              onClick={this.viewLess}
            >
              View Less
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TopCat);
