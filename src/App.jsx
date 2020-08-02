import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import {
  CTribo,
  SelectTribo,
  UserPerfil,
  TesteRedux,
} from "./pages/index";
// import store from './redux/store';

import { store } from "./store/store";

import "./App.css";

const LoginP = lazy(() => import("./pages/login/Plogin"));
const Pregister = lazy(() => import("./pages/register/register"));

const App = () => {
  return (
    <div className="App">
      <div className="App2"></div>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LoginP} />
            <Route exact path="/Cadastrar" component={Pregister} />
            <Route exact path="/Tribo" component={CTribo} />
            <Route exact path="/SelectTribo" component={SelectTribo} />
            <Route exact path="/Perfil" component={UserPerfil} />
            <Route exact path="/Teste" component={TesteRedux} />
          </Switch>
        </Suspense>
      </Provider>
    </div>
  );
};

export default App;
