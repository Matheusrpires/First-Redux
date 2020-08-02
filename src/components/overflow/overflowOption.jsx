import React from "react";

import TribosBtn from "../tribosBtn/tribosBtn";

import { Sdiv } from "./styles";

const OverflowOptions = ({ userInterests, hideClose }) => {
  return (
    <Sdiv>
      {userInterests ? (
        userInterests.map((interest, key) => {
          return <TribosBtn hideClose={hideClose} key={key} item={interest} />;
        })
      ) : (
        <TribosBtn hideClose={hideClose}/>
      )}
    </Sdiv>
  );
};

export default OverflowOptions;
