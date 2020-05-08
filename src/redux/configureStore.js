import { createStore, combineReducers, applyMiddleware } from "redux";
import { Stores } from "./stores";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      stores: Stores,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
