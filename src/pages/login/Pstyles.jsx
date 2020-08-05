import styled from "styled-components";

const SDiv = styled.div`
  padding: 20% 7% 0 7%;
  @media (min-width: 616px) {
    padding: 10% 7% 0 7%;
    width: 55%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: max(20vw, 600px);
  }
`;

const Sfooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;

export { SDiv, Sfooter };
