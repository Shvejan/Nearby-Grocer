import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchStores = (pincode) => (dispatch) => {
  dispatch(storesLoading(true));
  return fetch(baseUrl + "branchList/" + pincode + "?business_id=1")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((stores) => dispatch(storesAdd(stores)))
    .catch((error) => dispatch(storesFailed(error.message)));
};

export const storesLoading = () => ({
  type: ActionTypes.STORES_LOADING,
});

export const storesFailed = (errmess) => ({
  type: ActionTypes.STORES_FAILED,
  payload: errmess,
});
export const storesAdd = (stores) => ({
  type: ActionTypes.STORES_ADD,
  payload: stores,
});
