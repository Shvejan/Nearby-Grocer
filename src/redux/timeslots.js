import * as ActionTypes from "./ActionTypes";

export const Timeslots = (
  state = { isLoading: true, errMess: null, timeslots: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.TIMESLOT_ADD:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        timeslots: action.payload,
      };

    case ActionTypes.TIMESLOT_LOADING:
      return { ...state, isLoading: true, errMess: null, timeslots: [] };

    case ActionTypes.TIMESLOT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
