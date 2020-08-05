import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  registerCategories,
  getCategories,
  changeCategories,
  removeCategories,
} from "../../store/actions/updateCategoriesAct";

import {
  TribosBtn,
  DropdownT,
  Dot,
  Loading,
  Notify,
} from "../../components/index";

import { Scontainer, ScontainerItem, Sfooter, SArroyDiv } from "./styles";

const SelectTribo = (props) => {
  useEffect(() => {
    const getDefaultCategories = async () => {
      try {
        const defaultCategories = await props.getCategories(`teste`);
        return defaultCategories;
      } catch (error) {
        console.log(error);
      }
    };
    getDefaultCategories();
  }, []);

  const handleCategories = () => {
    let categories = {
      categories: props.states.updateCategoriesReducer.userCatefories,
      user_id: props.states.authReducer.id.toString(),
    };
    const selectTribe = props.registerCategories(categories);
  };

  return (
    <>
      <Loading />
      <Notify />
      <Scontainer>
        <DropdownT
          item={props.states.updateCategoriesReducer.defaultCategories}
          categories={props.changeCategories}
          placehold="Escolha seus interesses"
        />
        <ScontainerItem>
          {props.states.updateCategoriesReducer.userCatefories &&
            props.states.updateCategoriesReducer.userCatefories.map(
              (categorie, key) => {
                return (
                  <TribosBtn
                    key={key}
                    item={categorie}
                    removeC={props.removeCategories}
                  />
                );
              }
            )}
        </ScontainerItem>
        {/* <button onClick={handleCategories}>Teste redux</button> */}
      </Scontainer>
      <Sfooter>
        <Dot dot="1" />
        <SArroyDiv>
          <Link onClick={handleCategories} to="/Perfil">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 9H20" stroke="white" />
              <path d="M13 16L20 9L13 2" stroke="white" />
            </svg>
          </Link>
        </SArroyDiv>
      </Sfooter>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.updateCategoriesReducer,
  states: state,
});

const mapDispatchToProps = (dispatch) => ({
  registerCategories: (categories) => dispatch(registerCategories(categories)),
  getCategories: (data) => dispatch(getCategories(data)),
  changeCategories: (value) => dispatch(changeCategories(value)),
  removeCategories: (value) => dispatch(removeCategories(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTribo);
