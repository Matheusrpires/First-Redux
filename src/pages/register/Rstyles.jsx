import styled from "styled-components";

const SDiv = styled.div`
  padding: 4% 7% 0 7%;
  form > div > a {
    color: white;
    background-color: #e57728;
    padding: 6%;
    border: none;
    border-radius: 8px;
    margin: 0% 0% 0% 0%;
    width: 25%;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 414px) {
    width: 70%;
    margin: auto;
  }
  @media (min-width: 616px) {
    padding: 10% 7% 0 7%;
    width: 45%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding: 10% 0 0 0;
  }
`;

const SdivBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Sfooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
`;

const Sform = styled.form`
  @media (min-width: 1024px) {
    display: inline-grid;
    grid-template-columns: 100% 100%;
    grid-template-rows: 30% 30% 30%;
    grid-gap: 10%;
    margin: 0% 20%;
  }
`;
export { SDiv, Sfooter, SdivBtn, Sform };
