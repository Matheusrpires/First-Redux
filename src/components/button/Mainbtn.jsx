import React from "react";
import styled from "styled-components";

// import SButton from './styled';

const Mainbtn = ({ children, type, width, margin }) => {
  const SButton = styled.button`
    color: white;
    background-color: #e57728;
    padding: 6%;
    border: none;
    border-radius: 8px;
    margin: ${margin ? '0% 0% 0% 0' : '4% 0% 3% 0%'};
    width: ${width}%;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  `;

  return (
    <>
      <SButton type={type}>{children}</SButton>
    </>
  );
};

export default Mainbtn;
