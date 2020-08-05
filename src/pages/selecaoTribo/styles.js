import styled from "styled-components";

const Scontainer = styled.div`
  padding: 36% 5%;
  @media (min-width: 768px) {
    padding: 25vh 10%;
  }
`;

const ScontainerItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: auto;
  scroll-behavior: auto;
  height: 400px;
  padding-top: 10%;
  @media (min-width: 1024px) {
    padding-top: 0%;
  }
`;

const Sfooter = styled.footer`
  position: absolute;
  bottom: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SArroyDiv = styled.div`
  padding: 2%;
  background: #e57728;
  border-radius: 25px;

  @media (min-width: 768px) {
    padding: 1%;
    border-radius: 38px;
  }
`;

export { Scontainer, ScontainerItem, Sfooter, SArroyDiv };
