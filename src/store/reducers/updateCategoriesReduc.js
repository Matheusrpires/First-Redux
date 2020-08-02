import { actionTypes } from "../actions/updateCategoriesAct";

import initialState from "./initialState";

const updateCategoriesReducer = (
  state = initialState.categories,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.GET_USER_CATEGORIES:
      return {
        ...state,
        userCatefories: payload,
      };
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        defaultCategories: payload,
      };
    case actionTypes.CHANGE_CATEGORIES:
      return {
          ...state,
          userCatefories: !state.userCatefories.includes(payload) ? [...state.userCatefories, payload] : [...state.userCatefories.filter(item=> item !== payload)],
      };
      case actionTypes.REMOVE_CATEGORIES:
        return {
            ...state,
            userCatefories: state.userCatefories.filter((item) => item !== payload ),
        };
    default:
      return state;
  }
};

export default updateCategoriesReducer;
