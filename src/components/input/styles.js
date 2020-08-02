import styled from "styled-components";

const SInput = styled.input`
  background: #47484c;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  border: none;
  width: 93%;
  padding: 4% 0 4% 7%;
  border-bottom: 2px solid #e57728;
  color: white;
`;

const SDiv = styled.div`
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export { SInput, SDiv };
