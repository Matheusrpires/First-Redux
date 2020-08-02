import React from "react";

import {Sdot, Sdiv} from "./Sdot";

const Dot = ({ dot, dot1 }) => {
  return (
    <Sdiv>
      <Sdot primary={dot}></Sdot>
      <Sdot primary={dot1}></Sdot>
    </Sdiv>
  );
};

export default Dot;
