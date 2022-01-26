import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import IntroPage from "./Pages/IntroPage/IntroPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import colors from "./Colors/colors";
import PagesWrapper from "./Components/PagesWrapper/PagesWrapper";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState([1, 0, 0, 0]);

  const getActiveState = (index) => {
    return isActive[index] === 1 ? "translateX(-100%)" : "translateX(0%)";
  };
  return (
    <div id="appDiv" style={{ backgroundColor: colors.primary }}>
      <NavBar setIsActive={setIsActive} isActive={isActive} />
      <PagesWrapper id="pagesdiv">
        <IntroPage id="home" translate={getActiveState(0)} />
        <SkillsPage id="skills" translate={getActiveState(1)} />
        <ProjectsPage id="projects" translate={getActiveState(2)} />
        <ContactPage id="contactme" translate={getActiveState(3)} />
      </PagesWrapper>
    </div>
  );
}

export default App;
