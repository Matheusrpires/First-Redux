import React from "react";

import { Sbtn, SuserImg, Sclose, SPname } from "./styles";
import userImage from "../../images/user.png";

const TribosBtn = ({ item, removeC, hideClose }) => {
  const handleFunction = (categorie) => {
    removeC(categorie);
  };
  return (
    <>
      <Sbtn>
        <SuserImg src={userImage} alt="Your user image" />
        <SPname>{item}</SPname>
          <Sclose hideClose={hideClose} onClick={() => handleFunction(item)}>X</Sclose>
      </Sbtn>
    </>
  );
};

export default TribosBtn;
