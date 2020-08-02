import { changeLoading } from "./loadginActi";
import { createUser } from "../../api/register";
import { changeNotify } from "./notifyAct";
import { setUserToken, setId } from "./authentication";

export const actionTypes = {
  CHANGE_REGISTER: "CHANGE_REGISTER",
  SUCCESS_REGISTER: "SUCCESS_REGISTER",
  ERROR_REGISTER: "ERROR_REGISTER",
};

export const changesValue = (payload) => ({
  type: actionTypes.CHANGE_REGISTER,
  payload,
});

export const registerError = (payload) => ({
  type: actionTypes.ERROR_REGISTER,
  payload,
});

export const successRegister = (payload) => ({
  type: actionTypes.SUCCESS_REGISTER,
  payload,
});

export const registerUser = (data) => {
  return async (dispatch) => {
    dispatch(
      changeLoading({
        open: true,
        message: "Cadastrando...",
      })
    );
    try {
      const userResponse = await createUser(data);
      changeLoading({
        open: false,
        message: "",
      });
      // dispatch(
      //   changeNotify({
      //     open: true,
      //     class: "success",
      //     message: "Usuário cadastrador com sucesso",
      //   })
      // );
      console.log("log no action register resposta api", userResponse);
      dispatch(setUserToken(userResponse.jwt));
      const userNameId = {
        id: userResponse.user.id,
        userName: userResponse.user.username,
      };
      dispatch(setId(userNameId));
      dispatch(successRegister(true));
      return userResponse;
    } catch (error) {
      console.log("Error create user action", error);
      dispatch(
        changeNotify({
          open: true,
          message: "Erro",
        })
      );
      changeLoading({
        open: false,
        message: "",
      });
    }
  };
};
