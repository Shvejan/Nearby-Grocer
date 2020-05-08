import { Loading } from "./Loading";
import React from "react";
import "./css/recievedStores.css";
import { Card } from "react-bootstrap";

const StoresCard = (props) => {
  if (props.store.product_count !== "0") {
    return (
      <div className="justify-content-center">
        <Card className="storeCard">
          <div className="row justify-content-center">
            <div className="col-5 align-items-center">
              <img src={props.store.logo} className="storeImage" />
            </div>
            <div className="col">
              <h6>{props.store.branch_name}</h6>
              <p>Phone: {props.store.phone}</p>
              <p>{props.store.operation_time}</p>
              <p>Total avaliable products {props.store.product_count}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const RecievedStores = (props) => {
  if (props.stores.isLoading) {
    return <Loading />;
  } else if (props.stores.stores.STATUS == "Failure") {
    return <h4>No stores avaliable at this location</h4>;
  } else {
    return (
      <div>
        {props.stores.stores.DATA.map((s) => (
          <StoresCard store={s} />
        ))}
      </div>
    );
  }
};
export default RecievedStores;
