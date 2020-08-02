import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getUserInterests } from "../../store/actions/updateCategoriesAct";

import {
  WhiteMessage,
  Header,
  UserPicture,
  OverflowOptions,
} from "../../components/index";

import { Sbackground } from "./styles";

const UserPerfil = (props) => {
  useEffect(() => {
    // authReducer.id.toString(),
    const getInt = async () => {
      try {
        const getUserCategoriesInterest = await props.getUserInterests(props.data.authReducer.id.toString());
        return getUserCategoriesInterest;
      } catch (error) {
        console.log(error)
      }
    }
    getInt();
  }, []);

  return (
    <>
      <Header userName={props.data.authReducer.userName} />
      <Sbackground></Sbackground>
      <UserPicture span="true" />
      <WhiteMessage size="20px" height="22px">
        Seus Interesses
      </WhiteMessage>
      <OverflowOptions hideClose='true'
        userInterests={props.data.updateCategoriesReducer.userCatefories}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInterests: (data) => dispatch(getUserInterests(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPerfil);
