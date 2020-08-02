import React, { useEffect } from "react";
import { connect } from "react-redux";

import { changeLoading } from "../../store/actions/loadginActi";

import SDivNotify from "../notify/Snotify";

const Loading = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
      console.log("loading", timer);
    }, 4000);
    return () => clearTimeout(timer);
  }, [props.loading.open]);

  const handleClose = () => {
    props.changeLoading({
      open: false,
    });
  };

  return (
    <SDivNotify status={props.loading.open}>
      {props.loading.open && <h1>Loading...</h1>}
    </SDivNotify>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loadingRecuder,
});

const mapDispatchToProps = (dispath) => ({
  changeLoading: (value) => dispath(changeLoading(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
