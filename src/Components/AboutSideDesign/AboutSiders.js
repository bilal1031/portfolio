import styled from "styled-components";

const AboutSiders = styled.img`
  position: absolute;
  height: 250px;
  width: 200px;
  top: ${(props) => props.tpos};
  right: ${(props) => props.rpos};
  left: ${(props) => props.lpos};
  bottom: ${(props) => props.bpos};
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export default AboutSiders;
