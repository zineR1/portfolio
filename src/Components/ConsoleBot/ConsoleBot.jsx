import styles from "./ConsoleBot.module.css";
import gitbash from "../../assets/gitbash.png";
import ActionButtons from "./ActionButtons";
import { useState } from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { PromptLine, ResponseLine } from "../";

const ConsoleBot = () => {
  const { data } = usePortfolioStore();
  const introMessage = `${data?.consoleData?.intro}. Click one of the buttons bellow and see the magic.`;
  const [renderedData, setRenderedData] = useState([
    { key: "intro", value: introMessage },
  ]);
  const [disabledButtons, setDisabledButtons] = useState({
    aboutMe: false,
    techStack: false,
    location: false,
    softSkills: false,
  });

  const addLine = (action) => {
    const value = data?.consoleData?.[action];
    setRenderedData((prev) => [...prev, { key: action, value }]);
    setDisabledButtons((prev) => ({ ...prev, [action]: true }));
  };

  return (
    <div className={styles.main}>
      <div className={styles.gral}>
        <div className={styles.top}>
          <div className={styles.gitbash}>
            <img src={gitbash} alt="git" height="18px" width="17px" />
          </div>
          <p>BotConsole:/c/Users/Recruiter/Desktop</p>
        </div>
        <PromptLine />
        <ResponseLine renderedData={renderedData} />

        <div className={styles.write}>
          <p>$</p>
          <p className={styles.animationBar}>|</p>
        </div>
      </div>
      <ActionButtons disabledButtons={disabledButtons} addLine={addLine} />
    </div>
  );
};

export default ConsoleBot;
