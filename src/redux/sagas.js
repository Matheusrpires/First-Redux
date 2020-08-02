import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData, SEND_REGISTER_DATA, receiveRegisterData } from "./actions/index";
import fetchData from "../api/index";
import {registerUserService} from '../api/authentication';

// import { registerUserService } from "../api/authentication";
// import { registerUserService, loginUserService } from "../api/authentication";
// import * as types from "./actions";

function* getApiData(action) {
  try {
    const data = yield call(fetchData, action.userId);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* registerSaga(payload) {
  console.log(payload);
  try {
    const response = yield call(registerUserService, payload);
    yield put(receiveRegisterData(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
  yield takeLatest(SEND_REGISTER_DATA, registerSaga);
}

// export function* loginSaga(payload) {
//   try {
//     const response = yield call(loginUserService, payload);
//     yield [put({ type: types.LOGIN_USER_SUCCESS, response })];
//   } catch (error) {
//     yield put({ type: types.LOGIN_USER_ERROR, error });
//   }
// }
