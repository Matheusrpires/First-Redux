import React from "react";
import { Link } from "react-router-dom";

import { Image, WhiteMessage, Dot } from "../../components/index";

import { SDiv, Sfooter, SArroyDiv } from "./Tstyles";

const CTribo = () => {
  return (
    <>
      <SDiv>
        <div id="square2"></div>
        <div id="square"></div>
        <Image />
        <WhiteMessage size="26px" peso="bold" height="32px">
          Qual é sua tribo?
        </WhiteMessage>
        <WhiteMessage
          size="14px"
          styl="italic"
          height="22px"
          color="rgba(255, 255, 255, 0.8)"
        >
          Para começar a usar seu perfil, primeiro nos informe sobre o que você
          curte.
        </WhiteMessage>
      </SDiv>
      <Sfooter>
        <Dot dot1="1" />
        <SArroyDiv>
          <Link to='/SelectTribo'>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 9H20"
                stroke="white"
                // stroke-width="2"
                // stroke-miterlimit="10"
              />
              <path
                d="M13 16L20 9L13 2"
                stroke="white"
                // stroke-width="2"
                // stroke-miterlimit="10"
                // stroke-linecap="square"
              />
            </svg>
          </Link>
        </SArroyDiv>
      </Sfooter>
      <div id="square3"></div>
    </>
  );
};

export default CTribo;
