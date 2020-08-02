import {
  saveUserCategorie,
  getApiCategories,
  getUserCategories,
} from "../../api/updateCategories";

import { changeLoading } from "./loadginActi";
import { changeNotify } from ".//notifyAct";

export const actionTypes = {
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_USER_CATEGORIES: "GET_USER_CATEGORIES",
  SUCCESS_CATEGORIES: "SUCCESS_CATEGORIES",
  SUCCESS_UCATEGORIES: "SUCCESS_CATEGORIES",
  CHANGE_CATEGORIES: "CHANGE_CATEGORIES",
  REMOVE_CATEGORIES: "REMOVE_CATEGORIES",
};

export const successCategories = (payload) => ({
  type: actionTypes.SUCCESS_CATEGORIES,
  payload,
});

export const getSuccessCategories = (payload) => ({
  type: actionTypes.GET_CATEGORIES,
  payload,
});

export const getSuccessUserCategories = (payload) => ({
  type: actionTypes.GET_USER_CATEGORIES,
  payload,
});

export const changeCategories = (payload) => ({
  type: actionTypes.CHANGE_CATEGORIES,
  payload,
});

export const removeCategories = (payload) => ({
  type: actionTypes.REMOVE_CATEGORIES,
  payload,
});

export const registerCategories = (data) => {
  const payloadData = {
    token: sessionStorage.getItem("access_token"),
    data: data,
  };
  console.log("PATLOAD DADA", payloadData);
  return async (dispatch) => {
    try {
      const userCategorie = await saveUserCategorie(payloadData);
      dispatch(successCategories(data.categories));
      return userCategorie;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCategories = (data) => {
  return async (dispatch) => {
    dispatch(
      changeLoading({
        open: true,
        message: "Categorias",
      })
    );
    try {
      const categories = await getApiCategories(data);
      dispatch(getSuccessCategories(categories));
      dispatch(
        changeLoading({
          open: false,
          message: "",
        })
      );
      return categories;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserInterests = (data) => {
  const payloadData = {
    token: sessionStorage.getItem("access_token"),
    id: data,
  };
  return async (dispatch) => {
    dispatch(
      changeLoading({
        open: true,
        message: "Categorias",
      })
    );
    try {
      const userInterests = await getUserCategories(payloadData);
      dispatch(getSuccessUserCategories(userInterests));
      dispatch(
        changeLoading({
          open: false,
          message: "",
        })
      );
      return userInterests;
    } catch (error) {
      console.log(error);
    }
  };
};
