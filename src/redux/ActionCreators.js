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
export const addPincode = (pincode) => ({
  type: ActionTypes.PINCODE_ADD,
  payload: pincode,
});

export const fetchSubCat = (branch_id, category_id) => (dispatch) => {
  dispatch(SubCatLoading(true));
  return fetch(baseUrl + "subcategories", {
    method: "POST",
    body: JSON.stringify({ category_id: category_id, branch_id: branch_id }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
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
    .then((subCat) => {
      dispatch(SubCatAdd(subCat));
    })
    .catch((error) => dispatch(SubCatFailed(error.message)));
};

export const SubCatLoading = () => ({
  type: ActionTypes.SUBCAT_LOADING,
});

export const SubCatFailed = (errmess) => ({
  type: ActionTypes.SUBCAT_FAILED,
  payload: errmess,
});
export const SubCatAdd = (mainCat) => ({
  type: ActionTypes.SUBCAT_ADD,
  payload: mainCat,
});
export const fetchProducts = (branch_id, sub_category_id) => (dispatch) => {
  dispatch(productsLoading(true));
  return fetch(baseUrl + "subcategoryproducts", {
    method: "POST",
    body: JSON.stringify({
      sub_category_id: sub_category_id,
      branch_id: branch_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
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
    .then((products) => {
      dispatch(productsAdd(products));
    })
    .catch((error) => dispatch(productsFailed(error.message)));
};

export const productsLoading = () => ({
  type: ActionTypes.PRODUCTS_LOADING,
});

export const productsFailed = (errmess) => ({
  type: ActionTypes.PRODUCTS_FAILED,
  payload: errmess,
});
export const productsAdd = (products) => ({
  type: ActionTypes.PRODUCTS_ADD,
  payload: products,
});
export const productsClear = () => ({
  type: ActionTypes.PRODUCTS_CLEAR,
});
