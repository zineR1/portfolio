import styles from "./ConsoleBot.module.css";
import ActionButtons from "../../components/ConsoleBot/ActionButtons";
import { useState } from "react";
import { useAppStore } from "../../store";
import { PromptLine, ResponseLine, ConsoleHeader } from "../../components";

const ConsoleBot = () => {
  const { user } = useAppStore();
  const introMessage = `${user?.consoleData?.intro}. Just click one of the buttons below to get started.`;
  const [renderedData, setRenderedData] = useState<
    { key: string; value: string | string[] | undefined }[]
  >([{ key: "intro", value: introMessage }]);
  const [showEmptyLine, setShowEmptyLine] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.consoleBot}>
        <h2 className={styles.title}>About me</h2>
        <div className={styles.container}>
          <ConsoleHeader />
          <PromptLine />
          <ResponseLine
            renderedData={renderedData}
            setShowEmptyLine={setShowEmptyLine}
          />
          {showEmptyLine && (
            <div className={styles.write}>
              <span className={styles.symbol}>$</span>
              <span className={styles.animationBar}>|</span>
            </div>
          )}
        </div>
        <ActionButtons
          setRenderedData={setRenderedData}
          setShowEmptyLine={setShowEmptyLine}
        />
      </div>
    </div>
  );
};

export default ConsoleBot;
