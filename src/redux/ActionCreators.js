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
      dispatch(fetchCatmix(mainCat.DATA[0].category_id, branchId, 20));
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

export const fetchBrands = (branch_id, limit) => (dispatch) => {
  dispatch(brandsLoading(true));
  return fetch(baseUrl + "brandslist", {
    method: "POST",
    body: JSON.stringify({
      limit: limit,
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
    .then((brands) => {
      dispatch(brandsAdd(brands));
    })
    .catch((error) => dispatch(brandsFailed(error.message)));
};

export const brandsLoading = () => ({
  type: ActionTypes.BRANDS_LOADING,
});

export const brandsFailed = (errmess) => ({
  type: ActionTypes.BRANDS_FAILED,
  payload: errmess,
});
export const brandsAdd = (brands) => ({
  type: ActionTypes.BRANDS_ADD,
  payload: brands,
});
export const fetchBanners = (branch_id) => (dispatch) => {
  dispatch(brandsLoading(true));
  return fetch(baseUrl + "banners", {
    method: "POST",
    body: JSON.stringify({
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
    .then((banners) => {
      dispatch(bannersAdd(banners));
    })
    .catch((error) => dispatch(bannersFailed(error.message)));
};

export const bannersLoading = () => ({
  type: ActionTypes.BANNERS_LOADING,
});

export const bannersFailed = (errmess) => ({
  type: ActionTypes.BANNERS_FAILED,
  payload: errmess,
});
export const bannersAdd = (banners) => ({
  type: ActionTypes.BANNERS_ADD,
  payload: banners,
});
export const fetchSearch = (branch_id, keyword, limit) => (dispatch) => {
  dispatch(searchLoading(true));
  return fetch(baseUrl + "searchproduct", {
    method: "POST",
    body: JSON.stringify({
      keyword: keyword,
      limit: limit,
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
    .then((search) => {
      dispatch(searchAdd(search));
    })
    .catch((error) => dispatch(searchFailed(error.message)));
};

export const searchLoading = () => ({
  type: ActionTypes.SEARCH_LOADING,
});

export const searchFailed = (errmess) => ({
  type: ActionTypes.SEARCH_FAILED,
  payload: errmess,
});
export const searchAdd = (search) => ({
  type: ActionTypes.SEARCH_ADD,
  payload: search,
});
export const fetchBrandProducts = (branch_id, brand_id, limit) => (
  dispatch
) => {
  dispatch(brandProductsLoading(true));
  return fetch(baseUrl + "brandproducts", {
    method: "POST",
    body: JSON.stringify({
      brand_id: brand_id,
      limit: limit,
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
    .then((bp) => {
      dispatch(brandProductsAdd(bp));
    })
    .catch((error) => dispatch(brandProductsFailed(error.message)));
};

export const brandProductsLoading = () => ({
  type: ActionTypes.BRANDPRODUCTS_LOADING,
});

export const brandProductsFailed = (errmess) => ({
  type: ActionTypes.BRANDPRODUCTS_FAILED,
  payload: errmess,
});
export const brandProductsAdd = (bp) => ({
  type: ActionTypes.BRANDPRODUCTS_ADD,
  payload: bp,
});
export const fetchCatmix = (main_category_id, branch_id, limit) => (
  dispatch
) => {
  dispatch(catmixLoading(true));
  return fetch(baseUrl + "categorymixproduct", {
    method: "POST",
    body: JSON.stringify({
      main_category_id: main_category_id,
      limit: limit,
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
    .then((bp) => {
      dispatch(catmixAdd(bp));
    })
    .catch((error) => dispatch(catmixFailed(error.message)));
};

export const catmixLoading = () => ({
  type: ActionTypes.CATMIX_LOADING,
});

export const catmixFailed = (errmess) => ({
  type: ActionTypes.CATMIX_FAILED,
  payload: errmess,
});
export const catmixAdd = (catmix) => ({
  type: ActionTypes.CATMIX_ADD,
  payload: catmix,
});
export const fetchPrivate = (url_code) => (dispatch) => {
  dispatch(privateLoading(true));
  return fetch(baseUrl + "privatestores", {
    method: "POST",
    body: JSON.stringify({
      url_type: "store",
      url_code: url_code,
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
    .then((store) => {
      dispatch(privateAdd(store));
    })
    .catch((error) => dispatch(privateFailed(error.message)));
};

export const privateLoading = () => ({
  type: ActionTypes.PRIVATE_LOADING,
});

export const privateFailed = (errmess) => ({
  type: ActionTypes.PRIVATE_FAILED,
  payload: errmess,
});
export const privateAdd = (store) => ({
  type: ActionTypes.PRIVATE_ADD,
  payload: store,
});

export const cartAdd = (data) => ({
  type: ActionTypes.CART_ADD,
  payload: data,
});

export const cartRemove = (id) => ({
  type: ActionTypes.CART_REMOVE,
  payload: id,
});
export const cartClear = () => ({
  type: ActionTypes.CART_CLEAR,
});

export const cartTemporary = (branch_id, productsList) => (dispatch) => {
  return fetch(baseUrl + "carttemp", {
    method: "POST",
    body: JSON.stringify([
      {
        cart_id: "cart12345",
        branch_id: branch_id,
        product_list: productsList,
      },
    ]),
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
    .then((store) => {
      sessionStorage.setItem("cart_id", store.DATA.cart_id);
    })
    .catch((error) => alert(error));
};

export const fetchAddress = (customer_id) => (dispatch) => {
  dispatch(addressLoading(true));
  return fetch(baseUrl + "shpaddrlist/" + customer_id + "?business_id=1")
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
    .then((address) => dispatch(addressAdd(address)))
    .catch((error) => dispatch(addressFailed(error.message)));
};

export const addressLoading = () => ({
  type: ActionTypes.ADDRESS_LOADING,
});

export const addressFailed = (errmess) => ({
  type: ActionTypes.ADDRESS_FAILED,
  payload: errmess,
});
export const addressAdd = (address) => ({
  type: ActionTypes.ADDRESS_ADD,
  payload: address,
});

export const fetchShipcharges = (branch_id, pincode, cart_id) => (dispatch) => {
  dispatch(shipchargesLoading(true));
  return fetch(
    "http://peril3as3a4.nearbygrocer.com/shpcharges/" +
      branch_id +
      "/" +
      pincode +
      "/" +
      cart_id
  )
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
    .then((charges) => dispatch(shipchargesAdd(charges)))
    .catch((error) => dispatch(shipchargesFailed(error.message)));
};

export const shipchargesLoading = () => ({
  type: ActionTypes.SHIPCHARGES_LOADING,
});

export const shipchargesFailed = (errmess) => ({
  type: ActionTypes.SHIPCHARGES_FAILED,
  payload: errmess,
});
export const shipchargesAdd = (charges) => ({
  type: ActionTypes.SHIPCHARGES_ADD,
  payload: charges,
});
