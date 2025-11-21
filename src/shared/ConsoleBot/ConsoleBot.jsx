import styles from "./ConsoleBot.module.css";
import gitbash from "../../assets/gitbash.png";
import ActionButtons from "./ActionButtons";
import { useState } from "react";
import { usePortfolioStore } from "../../store/usePortfolioStore";
import { PromptLine, ResponseLine } from "../";

const ConsoleBot = () => {
  const { data } = usePortfolioStore();
  const introMessage = `${data?.consoleData?.intro}. Just click one of the buttons below to get started.`;
  const [renderedData, setRenderedData] = useState([
    { key: "intro", value: introMessage },
  ]);
  const [disabledButtons, setDisabledButtons] = useState({
    aboutMe: false,
    techStack: false,
    hobbies: false,
    softSkills: false,
  });
  const [showEmptyLine, setShowEmptyLine] = useState(false);

  const addLine = (action) => {
    const value = data?.consoleData?.[action];
    setRenderedData((prev) => [...prev, { key: action, value }]);
    setDisabledButtons((prev) => ({ ...prev, [action]: true }));
    setShowEmptyLine(false);
  };

  return (
    <>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.gitbash}>
            <img src={gitbash} alt="git" height="18px" width="17px" />
          </div>
          <p>BotConsole:/c/Users/Recruiter/Desktop</p>
        </div>
        <PromptLine />
        <ResponseLine
          renderedData={renderedData}
          showEmptyLine={showEmptyLine}
          setShowEmptyLine={setShowEmptyLine}
        />
        {showEmptyLine && (
          <div className={styles.write}>
            <span className={styles.symbol}>$</span>
            <span className={styles.animationBar}>|</span>
          </div>
        )}
      </div>
      <ActionButtons disabledButtons={disabledButtons} addLine={addLine} />
    </>
  );
};

export default ConsoleBot;
