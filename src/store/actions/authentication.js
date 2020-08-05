import { loginApi } from "../../api/login";
import { changeLoading } from "./loadginActi";
import { changeNotify } from ".//notifyAct";

export const actionTypes = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  CHANGE: "CHANGE",
  ID: "ID",
  GET_INTERESTS: 'GET_INTERESTS'
};

export const login = (token) => ({
  type: actionTypes.LOGIN,
  token,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});

export const success = (bool) => ({
  type: actionTypes.SUCCESS,
  bool,
});

export const loginError = (error) => ({
  type: actionTypes.ERROR,
  error,
});

export const changeValue = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const loading = (bool, message = null) => ({
  type: actionTypes.LOADING,
  isLoading: {
    active: bool,
    message,
  },
});

export const setId = (id) => ({
  type: actionTypes.ID,
  id,
})

export const getUser = () => (dispatch) =>
  sessionStorage.getItem("access_token").then((response) => {
    dispatch(loading(false));
    if (typeof response !== "undefined") {
      dispatch(login(response));
    }
  });

export const setUserToken = (token) => (dispatch) => {
  sessionStorage.setItem("access_token", token);
  dispatch(loading(false));
  dispatch(success(true));
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(
      changeLoading({
        open: true,
        message: "Autenticando",
      })
    );
    try {
      const api = await loginApi(credentials);
      dispatch(
        changeLoading({
          open: false,
          message: "",
        })
      );
      dispatch(setUserToken(api.jwt));
      const userNameId = {
        id: api.user.id,
        userName: api.user.username
      }
      dispatch(setId(userNameId));
      return api;
    } catch (error) {
      console.log(error);
      dispatch(
        changeNotify({
          open: true,
          message: "E-mail ou senha incorretos",
          class: "error",
        })
      );
    }
  };
};
