import styled from "styled-components";

const Sdivp = styled.div`
  padding: 10% 0;
  text-align: center;
  @media (min-width: 768px) {
    padding: 5% 0 0 0;
  }
`;

const Simg = styled.img`
  border: 9px solid #81c565;
  width: 50%;
  border-radius: 50%;
  @media (min-width: 768px) {
    width: 20%;
  }
  @media (min-width: 1024px) {
    width: ${(props) => (props.status ? "25% " : "10%")};
  }
`;

const Sspan = styled.span`
  position: absolute;
  top: 34%;
  left: 64%;
  background: #e57728;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 3%;
  border-radius: 49%;
`;

export { Sdivp, Simg, Sspan };
