import styled from "styled-components";

const PagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // height: ${window.innerHeight - 56}px;
  // width: 100vw;

  @media only screen and (max-width: 768px) {
     {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default PagesWrapper;
