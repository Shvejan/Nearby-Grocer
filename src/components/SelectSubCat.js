import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { fetchSubCat } from "../redux/ActionCreators";
import CatNav from "./CatNav";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    subCat: state.subCat,
    mainCat: state.mainCat,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchSubCat: (branch_id, category_id) =>
    dispatch(fetchSubCat(branch_id, category_id)),
});

class SelectSubCat extends Component {
  componentDidMount() {
    this.props.fetchSubCat(
      sessionStorage.getItem("branch_id"),
      this.props.maincatId
    );
  }
  subCatCards = () => {
    if (this.props.subCat.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="productsDiv">
          <div
            className="container"
            style={{ marginTop: "20px", marginBottom: "100px" }}
          >
            <div className="row">
              {this.props.subCat.subCat.DATA.map((c) => {
                if (c.image) {
                  return (
                    <div className="col-3" style={{ marginBottom: "20px" }}>
                      <Link
                        to={`/categories/${this.props.maincatId}/${c.sub_category_id}`}
                        style={{ textDecoration: "none", fontSize: "15px" }}
                        onClick={() => {
                          sessionStorage.setItem(
                            "selectedSubcat",
                            c.sub_category_name
                          );
                        }}
                      >
                        <Card style={{ width: "200px", height: "200px" }}>
                          <div className="align-items-center">
                            <img
                              src={c.image}
                              style={{ width: "199px", height: "199px" }}
                              alt=""
                            />
                          </div>
                        </Card>
                      </Link>
                      <h6>{c.sub_category_name}</h6>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <CatNav mainCat={this.props.mainCat} />
        {this.subCatCards()}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSubCat);
