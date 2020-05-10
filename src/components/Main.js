import React, { Component } from "react";
import Checkout from "./Checkout";
import Home from "./Home";
import BrandedFood from "./routes/BrandedFood";
import DiaryBakery from "./routes/DiaryBakery";
import FruitsVegitables from "./routes/FruitsVegitables";
import NonVeg from "./routes/NonVeg";
import HomeCare from "./routes/HomeCare";
import PersonalCare from "./routes/PersonalCare";
import { Switch, Route, withRouter } from "react-router-dom";
import Beverages from "./routes/Beverages";
import FrozenVeg from "./routes/FrozenVeg";
import { Loading } from "./Loading";
import Test from "../test";
import CategoryProducts from "./CategoryProducts";
import { connect } from "react-redux";
import { fetchMainCat } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    mainCat: state.mainCat,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchMainCat: (branch_id) => dispatch(fetchMainCat(branch_id)),
});
class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const pin = sessionStorage.getItem("pincode");
    const branch = sessionStorage.getItem("branch_id");
    if (pin && branch) {
      console.log("session storeagadf");
      console.log(pin);
      console.log(branch);
      this.props.fetchMainCat(branch);
    } else {
      console.log("no sellion data");
    }
  }
  render() {
    const categorySelected = ({ match }) => {
      return <CategoryProducts catId={parseInt(match.params.catId, 10)} />;
    };
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/beverages/" component={() => <Beverages />} />
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
          />
          <Route exact path="/checkout/" component={() => <Checkout />} />
          <Route exact path="/loading/" component={() => <Loading />} />
          <Route exact path="/test/" component={() => <Test />} />
          <Route path="/categories/:catId" component={categorySelected} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
