import * as ActionTypes from "./ActionTypes";

export const BrandWiseProducts = (
  state = { isLoading: true, errMess: null, brandWiseProducts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.BRANDPRODUCTS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        brandWiseProducts: action.payload,
      };

    case ActionTypes.BRANDPRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        brandWiseProducts: [],
      };

    case ActionTypes.BRANDPRODUCTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
