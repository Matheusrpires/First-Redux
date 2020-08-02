import React, { useEffect } from "react";
import { connect } from "react-redux";

import { changeNotify } from "../../store/actions/notifyAct";

import SDivNotify from "./Snotify";

const Notify = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
      console.log('notify', timer)
    }, 2000);
    return () => clearTimeout(timer);
  }, [props.notify.open]);

  const handleClose = () => {
    props.changeNotify({
      open: false,
    });
  };

  return (
    <SDivNotify status={props.notify.open}>
      {props.notify.open && <h1>{props.notify.message}</h1>}
    </SDivNotify>
  );
  // return <SDivNotify status={true}>{true && <h1>Loading...</h1>}</SDivNotify>;
};

const mapStateToProps = (state) => ({
  notify: state.notifyReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeNotify: (value) => dispatch(changeNotify(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
