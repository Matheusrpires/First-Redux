import styled from "styled-components";

const Sheader = styled.header`
  display: flex;
  background: linear-gradient(
    118.74deg,
    #e57728 -8.84%,
    #e5a858 49.4%,
    #84c167 106.44%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
`;

const Sname = styled.p`
  font-family: 'PT Sans Caption', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 23px;
  color: white;
`;

export { Sheader, Sname };
