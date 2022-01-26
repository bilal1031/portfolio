import styled from "styled-components";
import colors from "../../Colors/colors";

const Indicator = styled.div`
  border-bottom-color: gold;
  border-bottom-width: 50px;
  position: absolute;
  bottom: 3px;
  height: 3px;
  transition: 0.5s;
  background: ${colors.secondary};
  left: ${(props) => props.indicatorLocation}px;
  width: ${(props) => props.indicatorWidth}px;
`;

export default Indicator;
