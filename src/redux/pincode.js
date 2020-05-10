import * as ActionTypes from "./ActionTypes";

export const Pincode = (state = { pincode: "" }, action) => {
  switch (action.type) {
    case ActionTypes.PINCODE_ADD:
      return {
        ...state,
        pincode: action.payload,
      };

    default:
      return state;
  }
};
