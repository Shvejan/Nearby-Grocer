import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import BrandedFood from "./BrandedFood";
import DiaryBakery from "./DiaryBakery";
import FruitsVegitables from "./FruitsVegitables";
import NonVeg from "./NonVeg";
import HomeCare from "./HomeCare";
import PersonalCare from "./PersonalCare";
import { Switch, Route, withRouter } from "react-router-dom";
import Beverages from "./Beverages";
import FrozenVeg from "./FrozenVeg";
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
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
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
