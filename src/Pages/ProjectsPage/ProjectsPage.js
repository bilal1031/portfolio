import React from "react";
import colors from "../../Colors/colors";
import Wrapper from "../../Components/Wrapper/Wrapper";

export default function ProjectsPage(props) {
  return (
    <Wrapper color={colors.primary} translate={props.translate} {...props}>
      <h1>Project</h1>
    </Wrapper>
  );
}
