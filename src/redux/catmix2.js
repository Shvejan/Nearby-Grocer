import * as ActionTypes from "./ActionTypes";

export const Catmix2 = (
  state = { isLoading: true, errMess: null, catmix2: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX_ADD2:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix2: action.payload,
      };

    case ActionTypes.CATMIX_LOADING2:
      return { ...state, isLoading: true, errMess: null, catmix2: [] };

    case ActionTypes.CATMIX_FAILED2:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
