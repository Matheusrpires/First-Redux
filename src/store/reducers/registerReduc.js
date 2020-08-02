import { actionTypes } from "../actions/registerAct";

import initialState from "./initialState";

export default (state = initialState.register, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_REGISTER:
      return {
        ...state,
        data: {
          ...state.data,
          ...payload,
        },
      }
    case actionTypes.SUCCESS_REGISTER:
      return { ...state, ...payload };

    case actionTypes.ERROR_REGISTER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
