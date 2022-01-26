import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  transition: 0.5s;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 100vw;
  transform: ${(props) => props.translate};
  @media only screen and (max-width: 768px) {
     {
      position: relative;
      left: 0;
    }
  }
`;

export default Wrapper;
