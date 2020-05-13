import * as ActionTypes from "./ActionTypes";

export const Shipcharges = (
  state = { isLoading: true, errMess: null, shipcharges: 0 },
  action
) => {
  switch (action.type) {
    case ActionTypes.SHIPCHARGES_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        shipcharges: action.payload,
      };

    case ActionTypes.SHIPCHARGES_LOADING:
      return { ...state, isLoading: true, errMess: null, shipcharges: [] };

    case ActionTypes.SHIPCHARGES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
