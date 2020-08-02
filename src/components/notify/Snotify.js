import styled from "styled-components";

const SDivNotify = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  opacity: 0.5;
  text-align: center;
  visibility: ${(props) => (props.status ? "visible" : "hidden")};
  h1 {
    color: white;
  }
`;

export default SDivNotify;
