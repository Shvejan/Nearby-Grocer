import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSubCat } from "../redux/ActionCreators";
import Header from "./Header";
import CatNav from "./CatNav";
import SubCatNav from "./SubCatNav";
import { Loading } from "./Loading";
import Products from "./Products";
import { Redirect } from "react-router-dom";

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
class NewCategoryProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubCatId: 0,
    };
  }
  componentDidMount() {
    this.props.fetchSubCat(
      sessionStorage.getItem("branch_id"),
      this.props.maincatId
    );
  }
  setSubCat = (cid) => {
    alert("setttt");
    this.setState({
      selectedSubCatId: cid,
    });
  };
  setcatid = () => {
    //alert(this.props.subCat.subCat.DATA[0].sub_category_id);
    try {
      return (
        <Redirect
          to={`/categories/${this.props.maincatId}/${this.props.subCat.subCat.DATA[0].sub_category_id}`}
        />
      );
    } catch (error) {}
  };
  render() {
    const page = () => {
      if (this.props.subCat.isLoading) {
        return <Loading />;
      } else if (this.props.subCat.errMess) {
        return <div>{this.props.subCat.errMess}</div>;
      } else {
        return (
          <React.Fragment>
            <SubCatNav
              subCat={this.props.subCat}
              mainCat={this.props.maincatId}
              setSubCat={this.setSubCat}
            />
            {this.setcatid()}
            <div className="productsDiv">
              <div className="container">
                <Products
                  branch_id={sessionStorage.getItem("branch_id")}
                  subCatId={this.state.selectedSubCatId}
                  mainCat={this.props.maincatId}
                />
              </div>
            </div>
          </React.Fragment>
        );
      }
    };

    return (
      <React.Fragment>
        <Header />
        <CatNav mainCat={this.props.mainCat} />
        <hr className="line" />
        {page()}
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategoryProjects);
