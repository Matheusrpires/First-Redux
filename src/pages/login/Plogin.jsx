import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import {
  MainLogo,
  Input,
  Mainbtn,
  WhiteMessage,
  Loading,
  Notify,
} from "../../components/index";
import { requestApiData } from "../../redux/actions/index";

import { SDiv, Sfooter } from "./Pstyles";

import { loginUser, changeValue } from "../../store/actions/authentication";

const LoginP = (props) => {
  const [redi, setRedi] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  const handleChange = (name, data) => {
    props.changeValue({ [name]: data });
  };

  const login = async () => {
    const { credentials } = props;
    try {
      const log = await props.loginUser(credentials);
      console.log("log no login react", log);
      if (log.jwt) {
        // window.location.replace("/Perfil");
        // window.location.replace("/SelectTribo");
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
            name="email"
            type="text"
            placeholder="Email"
            func={handleChange}
            color='true'
            value={props.credentials.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            func={handleChange}
            color='true'
            value={props.credentials.password}
          />
          <Mainbtn type="submit" width="100">
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
