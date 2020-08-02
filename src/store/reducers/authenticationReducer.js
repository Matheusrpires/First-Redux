import { actionTypes } from "../actions/authentication";
import initialState from "./initialState";

const authReducer = (state = initialState.auth, action) => {
  console.log(action)
  switch (action.type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...action.payload,
        },
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.token,
      };
    case actionTypes.ID:
      return {
        ...state,
        id: action.id.id,
        userName: action.id.userName
      };
    default:
      return state;
  }
};

export default authReducer;
