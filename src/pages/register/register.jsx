import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { changesValue, registerUser } from "../../store/actions/registerAct";

import {
  SmallLogo,
  Input,
  Mainbtn,
  WhiteMessage,
  Loading,
  Notify,
} from "../../components/index";

import { SDiv, Sfooter, SdivBtn, Sform } from "./Rstyles";

const Pregister = (props) => {
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    register();
  };

  const handlesChange = (name, user) => {
    console.log(props.changesValue({ [name]: user }));
    props.changesValue({ [name]: user });
  };

  const register = async () => {
    const { data } = props;
    try {
      const sendRegister = await props.registerUser(data);
      if (sendRegister.jwt) {
        // window.location.replace("/Tribo");
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {redirect && <Redirect to="/Tribo" />}
      <Loading />
      <Notify />
      <SDiv>
        <SmallLogo />
        <Sform
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <Input
            name="name"
            type="text"
            placeholder="Nome"
            func={handlesChange}
          />
          <Input
            name="sobrenome"
            type="text"
            placeholder="Sobrenome"
            func={handlesChange}
          />
          <Input
            name="username"
            type="text"
            placeholder="Username"
            func={handlesChange}
          />
          <Input
            name="email"
            type="text"
            placeholder="Email"
            func={handlesChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            func={handlesChange}
          />
          <Input
            name="Digite a senha novamente"
            type="password"
            placeholder="Senha"
          />
          <SdivBtn>
            <Mainbtn margin="true" type="submit" width="48">
              Cadastrar
            </Mainbtn>
            {/* <Link to="">Voltar</Link> */}
          </SdivBtn>
        </Sform>
      </SDiv>
      <Sfooter>
        <WhiteMessage action="Faça login" to="">
          Já possui uma conta ?
        </WhiteMessage>
      </Sfooter>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.registerReducer.data,
  success: state.registerReducer.success,
  error: state.registerReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  changesValue: (value) => dispatch(changesValue(value)),
  registerUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pregister);
