import styled from "styled-components";

const Sdiv = styled.div`
  position: relative;
  display: block;
  background: white;
  width: 30px;
  height: 2px;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  :before,
  :after {
    background: white;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }
  :before {
    top: -10px;
  }
  :after {
    bottom: -10px;
  }
`;

const Sbar = styled.div`
  height: 100vh;
  width: ${(props) => (props.state ? "65%" : "0")};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 0;
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 0px;
  background: #303134;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.state ? "25%" : "0")};
  }
`;

const Ssidea = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`;

const SHrLine = styled.hr`
  opacity: 0.4;
  color: #f2f2f2;
  margin: 0% 0;
`;

const SsideMenuContainer = styled.div`
  padding: 4% 0;
  @media (min-width: 1024px) {
    padding: 2% 0;
  }
`;

export { Sdiv, Sbar, Ssidea, SHrLine, SsideMenuContainer };
