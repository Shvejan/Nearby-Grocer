import * as ActionTypes from "./ActionTypes";

export const Catmix = (
  state = {
    isLoading: true,
    errMess: null,
    catmix: [],
    catmix1: [],
    catmix2: [],
    catmix3: [],
    catmix4: [],
  },
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
    case ActionTypes.CATMIX1_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix1: action.payload,
      };
    case ActionTypes.CATMIX2_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix2: action.payload,
      };
    case ActionTypes.CATMIX3_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix3: action.payload,
      };
    case ActionTypes.CATMIX4_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        catmix4: action.payload,
      };

    case ActionTypes.CATMIX_LOADING:
      return { ...state, isLoading: true, errMess: null, catmix: [] };

    case ActionTypes.CATMIX_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
