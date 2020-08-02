// import * as types from "../actions";

// export default (state = [], action) => {
//   let response = action.response;
//   console.log('responseReducer', response)
//   switch (action.type) {
//     case types.REGISTER_USER_SUCCESS:
//       return { ...state, response };
//     case types.REGISTER_USER_ERROR:
//       return { ...state, response };
//     default:
//       return state;
//   }
// };

import {RECEIVE_REGISTER_DATA} from '../actions/index';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_REGISTER_DATA:
      return { ...state, data };
    default:
      return state;
  }
};