import styled from "styled-components";

const Scontainer = styled.div`
  padding: 36% 5%;
  /* backdrop-filter: blur(1px); */
  /* background-color: rgba(255, 255, 255, 0.2); */
  /* height: 100vw; */
  @media (min-width: 768px) {
    padding: 17% 5%;
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

  a {
    /* padding: 35%; */
  }
  @media (min-width: 768px) {
    padding: 1%;
    a {
      /* padding: 50%; */
    }
  }
`;

export { Scontainer, ScontainerItem, Sfooter, SArroyDiv };
