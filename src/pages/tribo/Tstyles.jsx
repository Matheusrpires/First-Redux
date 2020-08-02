import styled from "styled-components";

const SDiv = styled.div`
  padding: 4% 7% 0 7%;
  width: 86%;
  @media (min-width: 616px) {
    padding: 10% 7% 0 7%;
    width: 45%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    padding: 1% 7% 0 7%;
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
  a {
    padding: 35%;
    background: #e57728;
    border-radius: 25px;
  }
  @media (min-width: 768px) {
    a {
      padding: 50%;
    }
  }
`;

export { SDiv, Sfooter, SArroyDiv };
