import React, { useState } from "react";

import { Sdiv, Sbar, Ssidea, SHrLine } from "./styles";

import UserPicture from "../user/userPicture/userPicture";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sdiv onClick={() => toggle()}></Sdiv>
      <Sbar state={open && "true"}>
        <Ssidea href="javascript:void(0)" onClick={() => toggle()}>
          &times;
        </Ssidea>
        <UserPicture />
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
