import * as ActionTypes from "./ActionTypes";

export const Catmix3 = (
  state = { isLoading: true, errMess: null, catmix3: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX_ADD3:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix3: action.payload,
      };

    case ActionTypes.CATMIX_LOADING3:
      return { ...state, isLoading: true, errMess: null, catmix3: [] };

    case ActionTypes.CATMIX_FAILED3:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
