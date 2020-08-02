import React from "react";
import { connect } from "react-redux";

const UsersAtivos = (props) => {
  return (
  <div>
    {
      props.users.active
    }
  </div>);
};

const mapStateProps = (state) => ({
  users: state.usersReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateProps, mapDispatchToProps)(UsersAtivos);
