import * as ActionTypes from "./ActionTypes";

export const MainCat = (
  state = { isLoading: true, errMess: null, mainCat: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.MAINCAT_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        mainCat: action.payload,
      };

    case ActionTypes.MAINCAT_LOADING:
      return { ...state, isLoading: true, errMess: null, mainCat: [] };

    case ActionTypes.MAINCAT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
