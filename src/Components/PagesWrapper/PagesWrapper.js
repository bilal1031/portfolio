import styled from "styled-components";

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: ${window.innerHeight - 56}px;
  width: 400vw;

  @media only screen and (max-width: 768px) {
     {
      flex-direction: column;
    }
  }
`;

export default PagesWrapper;
