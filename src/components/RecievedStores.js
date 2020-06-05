import { Loading } from "./Loading";
import React from "react";
import "./css/recievedStores.css";
import { Card } from "react-bootstrap";
import {
  fetchMainCat,
  cartClear,
  fetchStoreDetails,
} from "../redux/ActionCreators";
import { connect } from "react-redux";
import { Button } from "reactstrap";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  fetchMainCat: (branch_id) => dispatch(fetchMainCat(branch_id)),
  cartClear: () => dispatch(cartClear()),
  fetchStoreDetails: (store_id) => dispatch(fetchStoreDetails(store_id)),
});

const RecievedStores = (props) => {
  const storeSelected = (branch_id, branch_name, branch_logo, branch_phone) => {
    sessionStorage.setItem(
      "branch_logo",
      "https://nearbygrocer.com/" + branch_logo
    );
    sessionStorage.setItem("branch_name", branch_name);
    sessionStorage.setItem("branch_phone", branch_phone);
    sessionStorage.setItem("branch_id", branch_id);
    console.log("session branch set");
    window.location.reload(true);
    props.toggleStoresModal();
    props.fetchMainCat(branch_id);
    //props.fetchStoreDetails(branch_id);
    props.cartClear();
  };
  if (props.stores.isLoading) {
    return <Loading />;
  } else if (props.stores.stores.STATUS === "Failure" || props.stores.errMess) {
    return (
      <div>
        <h4>No stores avaliable at this location</h4>
        <Button
          type="submit"
          value="submit"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Change Pincode
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        {props.stores.stores.DATA.map((s) => (
          <div
            className="justify-content-center"
            onClick={() =>
              storeSelected(s.branch_id, s.branch_name, s.logo, s.phone)
            }
            key={s.branch_id}
          >
            <Card className="storeCard">
              <div className="row justify-content-center">
                <div className="col-5 align-items-center">
                  <img
                    src={"https://nearbygrocer.com/" + s.logo}
                    className="storeImage"
                    alt=""
                  />
                </div>
                <div className="col">
                  <h6>{s.branch_name}</h6>
                  <p>Phone: {s.phone}</p>
                  <p>{s.operation_time}</p>
                  <p>Total avaliable products {s.product_count}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(RecievedStores);
