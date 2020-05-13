import * as ActionTypes from "./ActionTypes";

export const Address = (
  state = { isLoading: true, errMess: null, address: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADDRESS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        address: action.payload,
      };

    case ActionTypes.ADDRESS_LOADING:
      return { ...state, isLoading: true, errMess: null, address: [] };

    case ActionTypes.ADDRESS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
