import * as ActionTypes from "./ActionTypes";

export const PrivateStore = (
  state = { isLoading: true, errMess: null, privateStore: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PRIVATE_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        privateStore: action.payload,
      };

    case ActionTypes.PRIVATE_LOADING:
      return { ...state, isLoading: true, errMess: null, privateStore: [] };

    case ActionTypes.PRIVATE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
