import * as ActionTypes from "./ActionTypes";

export const Products = (
  state = { isLoading: true, errMess: null, products: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PRODUCTS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        products: action.payload,
      };

    case ActionTypes.PRODUCTS_LOADING:
      return { ...state, isLoading: true, errMess: null, products: [] };

    case ActionTypes.PRODUCTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    case ActionTypes.PRODUCTS_CLEAR:
      return {
        ...state,
        isLoading: false,
        errMess: "No Products Avaliable",
        products: [],
      };
    default:
      return state;
  }
};
