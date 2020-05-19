import * as ActionTypes from "./ActionTypes";

export const Catmix4 = (
  state = { isLoading: true, errMess: null, catmix4: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX_ADD4:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix4: action.payload,
      };

    case ActionTypes.CATMIX_LOADING4:
      return { ...state, isLoading: true, errMess: null, catmix4: [] };

    case ActionTypes.CATMIX_FAILED4:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
