import React from "react";

import userProfile from "../../../images/user-profile.png";

import { Sdivp, Simg, Sspan } from "./styles";

const UserPicture = ({ span, status }) => {
  return (
    <Sdivp>
      <Simg status={status} src={userProfile} alt="Sua foto de perfil" />
    </Sdivp>
  );
};

export default UserPicture;
