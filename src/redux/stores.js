import * as ActionTypes from "./ActionTypes";

export const Stores = (
  state = { isLoading: true, errMess: null, stores: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.STORES_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        stores: action.payload,
      };

    case ActionTypes.STORES_LOADING:
      return { ...state, isLoading: true, errMess: null, stores: [] };

    case ActionTypes.STORES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
