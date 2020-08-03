import React from "react";
import styled from "styled-components";

// import SButton from './styled';

const Mainbtn = ({ children, type, width, margin, disabled, statusBtn }) => {
  const SButton = styled.button`
    color: white;
    background-color: #e57728;
    opacity: ${disabled ? "0.5" : 1};
    padding: 6%;
    border: none;
    border-radius: 8px;
    margin: ${margin ? "0% 0% 0% 0" : "4% 0% 3% 0%"};
    width: ${width}%;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  `;
  console.log(disabled)
  disabled && statusBtn(disabled);
  return (
    <>
      <SButton disabled={disabled} type={type}>
        {children}
      </SButton>
    </>
  );
};

export default Mainbtn;
