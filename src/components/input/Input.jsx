import React from "react";
import Label from "../label/label";

import { SInput, SDiv, SSpan } from "./styles";

const handleFunc = (e, funci) => {
  if (funci) {
    funci(e.target.name, e.target.value);
  }
};

const Input = ({
  name,
  placeholder,
  type,
  value,
  func,
  color,
  label,
  errors = [],
}) => {
  return (
    <SDiv>
      <Label color={color}>{label}</Label>
      {!!errors.length && <SSpan>{errors[0]}</SSpan>}
      <SInput
        name={name}
        placeholder={placeholder}
        type={type}
        defaultValue={value}
        onChange={(e) => handleFunc(e, func)}
      />
    </SDiv>
  );
};

export default Input;
