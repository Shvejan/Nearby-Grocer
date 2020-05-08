import { Loading } from "./Loading";
import React from "react";
const RecievedStores = (props) => {
  if (props.stores.isLoading) {
    return <Loading />;
  } else if (props.stores.stores.STATUS == "Failure") {
    return <h4>No stores avaliable at this location</h4>;
  } else {
    return <h3>{props.stores.stores.STATUS}</h3>;
  }
};
export default RecievedStores;
