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

export const fetchMainCat = (branchId) => (dispatch) => {
  dispatch(mainCatLoading(true));
  return fetch(baseUrl + "categories/" + branchId + "?business_id=1")
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
    .then((mainCat) => {
      dispatch(mainCatAdd(mainCat));
    })
    .catch((error) => dispatch(mainCatFailed(error.message)));
};

export const mainCatLoading = () => ({
  type: ActionTypes.MAINCAT_LOADING,
});

export const mainCatFailed = (errmess) => ({
  type: ActionTypes.MAINCAT_FAILED,
  payload: errmess,
});
export const mainCatAdd = (mainCat) => ({
  type: ActionTypes.MAINCAT_ADD,
  payload: mainCat,
});
