import * as ActionTypes from "./ActionTypes";

export const BrandProducts = (
  state = { isLoading: true, errMess: null, brandProducts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.BRANDPRODUCTS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        brandProducts: action.payload,
      };

    case ActionTypes.BRANDPRODUCTS_LOADING:
      return { ...state, isLoading: true, errMess: null, brandProducts: [] };

    case ActionTypes.BRANDPRODUCTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
