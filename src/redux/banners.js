import * as ActionTypes from "./ActionTypes";

export const Banners = (
  state = { isLoading: true, errMess: null, banners: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.BANNERS_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        banners: action.payload,
      };

    case ActionTypes.BANNERS_LOADING:
      return { ...state, isLoading: true, errMess: null, banners: [] };

    case ActionTypes.BANNERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
