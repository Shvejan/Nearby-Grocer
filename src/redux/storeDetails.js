import * as ActionTypes from "./ActionTypes";

export const StoreDetails = (
  state = { isLoading: true, errMess: null, storeDetails: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.STOREDETAILS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        storeDetails: action.payload,
      };

    case ActionTypes.STOREDETAILS_LOADING:
      return { ...state, isLoading: true, errMess: null, storeDetails: [] };

    case ActionTypes.STOREDETAILS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
