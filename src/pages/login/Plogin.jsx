import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import vest from "vest";
import validate from "../../validation/login";

import {
  MainLogo,
  Input,
  Mainbtn,
  WhiteMessage,
  Loading,
  Notify,
} from "../../components/index";

import { SDiv, Sfooter } from "./Pstyles";

import { loginUser, changeValue } from "../../store/actions/authentication";

const LoginP = (props) => {
  const [redi, setRedi] = useState(false);
  const [formState, setFormState] = useState({});
  const [result, setResult] = useState(vest.get("login_form"));
  const [statusBtn, setStatusBtn] = useState(true);

  const runValidate = (name, value) => {
    const res = validate(
      {
        ...formState,
        ...{ [name]: value },
      },
      name
    );
    setResult(res);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    runValidate();
    statusBtn && login();
  };

  const handleChange = (name, data) => {
    props.changeValue({ [name]: data });
    setFormState({ ...formState, [name]: data });
    runValidate(name, data);
  };

  const login = async () => {
    const { credentials } = props;
    try {
      const log = await props.loginUser(credentials);
      if (log.jwt) {
        setRedi(true);
      }
    } catch (error) {
      console.log("login no react login error", error);
    }
  };

  return (
    <>
      <Loading />
      <Notify />
      <SDiv>
        {redi && <Redirect to="/Perfil" />}
        <MainLogo />
        <form onSubmit={handleLogin}>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            func={handleChange}
            color="true"
            value={props.credentials.email}
            errors={result.getErrors("username")}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            func={handleChange}
            color="true"
            value={props.credentials.password}
            errors={result.getErrors("password")}
          />
          <Mainbtn
            disabled={result.hasErrors()}
            statusBtn={setStatusBtn}
            type="submit"
            width="100"
          >
            Login
          </Mainbtn>
        </form>
      </SDiv>
      <Sfooter>
        <WhiteMessage action="Cadastre-se" to="Cadastrar">
          Ainda não possui uma conta ?
        </WhiteMessage>
      </Sfooter>
    </>
  );
};

const mapStateToProps = (state) => ({
  credentials: state.authReducer.credentials,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (credentials) => dispatch(loginUser(credentials)),
  changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginP);
