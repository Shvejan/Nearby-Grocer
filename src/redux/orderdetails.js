import * as ActionTypes from "./ActionTypes";

export const Orderdetails = (
  state = { isLoading: true, errMess: null, orderdetails: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ORDERSDETAILS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        orderdetails: action.payload,
      };

    case ActionTypes.ORDERSDETAILS_LOADING:
      return { ...state, isLoading: true, errMess: null, orderdetails: [] };

    case ActionTypes.ORDERSDETAILS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
