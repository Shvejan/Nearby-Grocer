import React, { Component } from "react";
import Checkout from "./Checkout";
import Home from "./Home";
import { Switch, Route, withRouter } from "react-router-dom";
import { Loading } from "./Loading";
import Test from "../test";
import CategoryProducts from "./CategoryProducts";
import { connect } from "react-redux";
import {
  fetchMainCat,
  fetchBrands,
  fetchBanners,
} from "../redux/ActionCreators";
import SearchResults from "./SearchResults";
import BrandProducts from "./BrandProducts";
import PrivateUrl from "./private/PrivateUrl";
import Shipping from "./Shippping";
import UserAccount from "./UserAccount";
import AllBrands from "./AllBrands";
const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMainCat: (branch_id) => dispatch(fetchMainCat(branch_id)),
  fetchBrands: (branch_id, limit) => dispatch(fetchBrands(branch_id, limit)),
  fetchBanners: (branch_id) => dispatch(fetchBanners(branch_id)),
});
class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const pin = sessionStorage.getItem("pincode");
    const branch = sessionStorage.getItem("branch_id");
    const branch_name = sessionStorage.getItem("branch_name");
    const branch_logo = sessionStorage.getItem("branch_logo");

    if (pin && branch) {
      console.log("session storeagadf");
      console.log(pin);
      console.log(branch);
      console.log(branch_name);
      console.log(branch_logo);
      this.props.fetchMainCat(branch);
      this.props.fetchBanners(branch);
      this.props.fetchBrands(branch, 30);
    } else {
      console.log("no sellion data");
    }
  }
  render() {
    const categorySelected = ({ match }) => {
      return (
        <CategoryProducts
          catId={parseInt(match.params.catId, 10)}
          subCatId={parseInt(match.params.subCatId, 10)}
        />
      );
    };
    const brands = ({ match }) => {
      return <BrandProducts b_id={match.params.b_id} />;
    };
    const privateUrl = ({ match }) => {
      return <PrivateUrl urlCode={match.params.store_id} />;
    };
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          {/*<Route exact path="/beverages/" component={() => <Beverages />} />
          <Route exact path="/brandedFood/" component={() => <BrandedFood />} />
          <Route exact path="/diaryBakery/" component={() => <DiaryBakery />} />
          <Route
            exact
            path="/fruitsVegitables/"
            component={() => <FruitsVegitables />}
          />
          <Route exact path="/frozenVeg/" component={() => <FrozenVeg />} />
          <Route exact path="/nonVeg/" component={() => <NonVeg />} />
          <Route exact path="/homeCare/" component={() => <HomeCare />} />
          <Route
            exact
            path="/personalCare"
            component={() => <PersonalCare />}
    />*/}
          <Route exact path="/allbrands/" component={() => <AllBrands />} />
          <Route exact path="/checkout/" component={() => <Checkout />} />
          <Route exact path="/loading/" component={() => <Loading />} />
          <Route exact path="/test/" component={() => <Test />} />
          <Route
            exact
            path="/searchresults/"
            component={() => <SearchResults />}
          />
          <Route exact path="/brands/:b_id" component={brands} />
          <Route exact path="/store/:store_id" component={privateUrl} />
          <Route exact path="/account" component={() => <UserAccount />} />
          <Route exact path="/shipping" component={() => <Shipping />} />
          store/art15317rw10
          <Route
            path="/categories/:catId/:subCatId"
            component={categorySelected}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
