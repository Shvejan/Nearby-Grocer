import React, { Component } from "react";
import { fetchPrivate } from "../../redux/ActionCreators";
import { connect } from "react-redux";
import { Loading } from "../Loading";
import PrivateUrlHeader from "./PrivateUrlHeader";
import Slide from "../Slide";
import Footer from "../Footer";
import TopCat from "../TopCat";
import TopBrands from "../TopBrands";
import Catmix from "../Catmix";

const mapStateToProps = (state) => {
  return {
    privateStore: state.privateStore,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchPrivate: (store_id) => dispatch(fetchPrivate(store_id)),
});

class PrivateUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: true,
    };
  }

  componentDidMount() {
    this.props.fetchPrivate(this.props.urlCode);
  }
  storeSelected = (branch_id, branch_name, branch_logo) => {
    sessionStorage.setItem("private", true);
    sessionStorage.setItem("branch_logo", branch_logo);
    sessionStorage.setItem("branch_name", branch_name);

    sessionStorage.setItem("branch_id", branch_id);
    console.log("session branch set");

    //props.fetchMainCat(branch_id);
  };
  render() {
    if (this.props.privateStore.isLoading) {
      return <Loading />;
    } else {
      this.storeSelected(
        this.props.privateStore.privateStore.DATA.branch_list[0].branch_id,
        this.props.privateStore.privateStore.DATA.branch_list[0].branch_name,
        this.props.privateStore.privateStore.DATA.branch_list[0].logo
      );
      return (
        <div>
          <PrivateUrlHeader urlCode={this.props.urlCode} />
          <Slide />
          <TopCat />
          <TopBrands />
          <Catmix />
          <Footer />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateUrl);
