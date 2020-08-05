import styled from "styled-components";

const Sbtn = styled.div`
  background: #47484c;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  padding: 2% 0;
  margin: 3% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    width: 53%;
    padding: 1% 0;
    margin: 3% auto 0 auto;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const SuserImg = styled.img`
  width: 15%;
  border-radius: 25px;
  margin-left: -3%;
`;

const Sclose = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  background: salmon;
  padding: 0.5% 2%;
  border-radius: 25px;
  visibility: ${(props) => (props.hideClose ? "hidden" : "visible")};
`;

const SPname = styled.p`
  font-family: "Bebas Neue", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  color: #e4e7ff;
  margin-left: -5%;
`;

export { Sbtn, SuserImg, Sclose, SPname };
