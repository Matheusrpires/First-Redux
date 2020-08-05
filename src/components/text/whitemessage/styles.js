import styled from "styled-components";

const Paragraph = styled.p`
  color: ${(props) => (props.color ? props.color : "white")};
  font-family: Montserrat;
  font-weight: ${(props) => (props.peso ? "bold" : "300")};
  font-style: ${(props) => (props.styl ? props.styl : "normal")};
  font-size: max(1.5rem, 15px);
  line-height: ${(props) => (props.height ? props.height : "20px")};
  text-align: center;
`;

const Sa = styled.div`
  a {
    color: white;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    /* font-size: 16px; */
    font-size: max(1.5rem, 15px);
    line-height: 20px;
    text-align: center;
    text-decoration: underline;
  }
`;

export { Sa, Paragraph };
