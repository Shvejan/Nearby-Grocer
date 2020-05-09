import { createStore, combineReducers, applyMiddleware } from "redux";
import { Stores } from "./stores";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { MainCat } from "./mainCat";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      stores: Stores,
      mainCat: MainCat,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
