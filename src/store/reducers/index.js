import { combineReducers } from "redux";

import authReducer from "./authenticationReducer";
import registerReducer from "./registerReduc";
import loadingRecuder from "./loadingReduc";
import notifyReducer from "./notifyReduc";
import updateCategoriesReducer from "./updateCategoriesReduc";

const allReducers = combineReducers({
  authReducer,
  registerReducer,
  loadingRecuder,
  notifyReducer,
  updateCategoriesReducer
});

export default allReducers;
