import styled from "styled-components";
import colors from "../../Colors/colors";

const SlideButton = styled.div`
  position: absolute;
  bottom: 100px;
  right: 15px;
  background-color: ${colors.primary};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SlideButton;
