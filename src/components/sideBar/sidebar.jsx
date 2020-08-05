import React, { useState } from "react";

import { Sdiv, Sbar, Ssidea, SHrLine, SsideMenuContainer } from "./styles";

import UserPicture from "../user/userPicture/userPicture";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <SsideMenuContainer onClick={() => toggle()}>
        <Sdiv></Sdiv>
      </SsideMenuContainer>
      <Sbar state={open && "true"}>
        <Ssidea href="#" onClick={() => toggle()}>
          &times;
        </Ssidea>
        <UserPicture status="sideBar"/>
        <SHrLine />
        <a href="#">Feed</a>
        <a href="#">Amigos</a>
        <a href="#">Chat</a>
        <a href="#">Notificações</a>
      </Sbar>
    </>
  );
};

export default Sidebar;
