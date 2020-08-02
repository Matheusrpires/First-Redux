import styled from "styled-components";

const Sdot = styled.span`
  height: 12px;
  width: ${(props) => (props.primary === '1' ? "12px" : "36px")};
  background-color: #e57728;
  border-radius: ${(props) => (props.primary === '1' ? "50%" : "11111px")};
  opacity: ${(props) => (props.primary === '1'? "0.25" : "1")};
  display: inline-block;
  margin: 0 1%
`;

const Sdiv = styled.div`
  display: flex;
  width: 30%;
`

export {Sdot, Sdiv};
