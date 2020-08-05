import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import vest from "vest";

import validate from "../../validation/validate";

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

  const [result, setResult] = useState(vest.get("user_form"));
  const [formState, setFormState] = useState({});
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

  const handleLogin = async (e) => {
    e.preventDefault();
    runValidate();
    statusBtn && register();
  };

  const handlesChange = (name, user) => {
    props.changesValue({ [name]: user });
    setFormState({ ...formState, [name]: user });
    runValidate(name, user);
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
              label="Nome"
              type="text"
              placeholder="Nome"
              func={handlesChange}
              errors={result.getErrors("name")}
            />
            <Input
              name="sobrenome"
              label="Sobrenome"
              type="text"
              placeholder="Sobrenome"
              func={handlesChange}
              errors={result.getErrors("sobrenome")}
            />
            <Input
              name="username"
              label="Usuário"
              type="text"
              placeholder="Username"
              func={handlesChange}
              errors={result.getErrors("username")}
            />
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="Email"
              func={handlesChange}
              errors={result.getErrors("email")}
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="Senha"
              func={handlesChange}
              errors={result.getErrors("password")}
            />
            <Input
              name="confirm_password"
              label="Digite a senha novamente"
              type="password"
              placeholder="Senha"
              func={handlesChange}
              errors={result.getErrors("confirm_password")}
            />
            <SdivBtn>
              <Mainbtn
                disabled={result.hasErrors()}
                statusBtn={setStatusBtn}
                margin="true"
                type="submit"
                width="48"
              >
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
