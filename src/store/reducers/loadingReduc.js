import { actionTypes } from "../actions/loadginActi";

import initialState from "./initialState";

export default (state = initialState.loading, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_LOADING:
      return { ...state, ...payload };

    default:
      return state;
  }
};
