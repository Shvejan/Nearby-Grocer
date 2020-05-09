import { Loading } from "./Loading";
import React from "react";
import "./css/recievedStores.css";
import { Card } from "react-bootstrap";
import { fetchMainCat } from "../redux/ActionCreators";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  fetchMainCat: (branch_id) => dispatch(fetchMainCat(branch_id)),
});

const RecievedStores = (props) => {
  const storeSelected = (branch_id) => {
    props.toggleStoresModal();
    props.fetchMainCat(branch_id);
  };
  if (props.stores.isLoading) {
    return <Loading />;
  } else if (props.stores.stores.STATUS == "Failure") {
    return <h4>No stores avaliable at this location</h4>;
  } else {
    return (
      <div>
        {props.stores.stores.DATA.map((s) => (
          <div
            className="justify-content-center"
            onClick={() => storeSelected(s.branch_id)}
          >
            <Card className="storeCard">
              <div className="row justify-content-center">
                <div className="col-5 align-items-center">
                  <img src={s.logo} className="storeImage" />
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
