import { createStore, combineReducers, applyMiddleware } from "redux";
import { Stores } from "./stores";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { MainCat } from "./mainCat";
import { Pincode } from "./pincode";
import { SubCat } from "./subCat";
import { Products } from "./products";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      stores: Stores,
      mainCat: MainCat,
      pincode: Pincode,
      subCat: SubCat,
      products: Products,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
