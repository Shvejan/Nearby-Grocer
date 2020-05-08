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
class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
