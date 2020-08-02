import React from "react";

import SLabel from "./style";

const Label = ({ children, color }) => {
  return (
    <>
      <SLabel color={color}>{children}</SLabel>
    </>
  );
};

export default Label;
