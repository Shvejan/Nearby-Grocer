import * as ActionTypes from "./ActionTypes";

export const SubCat = (
  state = { isLoading: true, errMess: null, subCat: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.SUBCAT_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        subCat: action.payload,
      };

    case ActionTypes.SUBCAT_LOADING:
      return { ...state, isLoading: true, errMess: null, subCat: [] };

    case ActionTypes.SUBCAT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
