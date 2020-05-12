import * as ActionTypes from "./ActionTypes";

export const Catmix = (
  state = { isLoading: true, errMess: null, catmix: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.CATMIX_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix: action.payload,
      };

    case ActionTypes.CATMIX_LOADING:
      return { ...state, isLoading: true, errMess: null, catmix: [] };

    case ActionTypes.CATMIX_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
