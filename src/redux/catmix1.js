import * as ActionTypes from "./ActionTypes";

export const Catmix1 = (
  state = { isLoading: true, errMess: null, catmix1: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX_ADD1:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix1: action.payload,
      };

    case ActionTypes.CATMIX_LOADING1:
      return { ...state, isLoading: true, errMess: null, catmix1: [] };

    case ActionTypes.CATMIX_FAILED1:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
