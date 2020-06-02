import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSubCat } from "../redux/ActionCreators";
import LoadingPage from "./LoadingPage";
import Header from "./Header";

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
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchSubCat(
      sessionStorage.getItem("branch_id"),
      this.props.maincatId
    );
  }
  render() {
    if (this.props.subCat.isLoading) {
      return <LoadingPage />;
    } else {
      return (
        <React.Fragment>
          <Header />
        </React.Fragment>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCategoryProjects);
