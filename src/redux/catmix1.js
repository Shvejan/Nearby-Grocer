import * as ActionTypes from "./ActionTypes";

export const Catmix1 = (
  state = {
    isLoading: true,
    errMess: null,
    catmix1: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX1_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix1: action.payload,
      };

    case ActionTypes.CATMIX1_LOADING:
      return { ...state, isLoading: true, errMess: null, catmix1: [] };

    case ActionTypes.CATMIX1_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
