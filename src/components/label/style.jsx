import styled from "styled-components";

const SLabel = styled.label`
  color: ${(props) => props.color ? 'white' : 'black'};
  margin-bottom: 2%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default SLabel;
