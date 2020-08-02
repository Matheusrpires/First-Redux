import React from "react";
import { Link } from "react-router-dom";

import { Paragraph, Sa } from "./styles";

const WhiteMessage = ({ children, size, peso, height, action, to, styl, color }) => {
  return (
    <>
      <Sa>
        <Paragraph size={size} peso={peso} height={height} color={color} styl={styl} > 
          {children} &nbsp;
          <Link to={`/${to}`}>{action}</Link>
        </Paragraph>
      </Sa>
    </>
  );
};

export default WhiteMessage;