import styles from "../../shared/ConsoleBot/ConsoleBot.module.css";
import { useState } from "react";
import { useAppStore } from "../../store/useAppStore";
import { consoleActionButtons } from "../../constants";
import { ConsoleData, ActionButtonsProps } from "../../types";

const ActionButtons = ({
  setRenderedData,
  setShowEmptyLine,
}: ActionButtonsProps) => {
  const { user } = useAppStore();
  const [disabledButtons, setDisabledButtons] = useState<
    Record<keyof ConsoleData, boolean>
  >({
    aboutMe: false,
    techStack: false,
    hobbies: false,
    softSkills: false,
    intro: true,
  });

  const addLine = (action: keyof ConsoleData) => {
    const value = user?.consoleData?.[action];
    setRenderedData((prev) => [...prev, { key: action, value }]);
    setDisabledButtons((prev: Record<keyof ConsoleData, boolean>) => ({
      ...prev,
      [action]: true,
    }));
    setShowEmptyLine(false);
  };
  return (
    <div className={styles.actionButtons}>
      {consoleActionButtons?.map((button) => (
        <button
        id={`${button.key}-btn`}
          key={button.key}
          onClick={() => addLine(button.key as keyof ConsoleData)}
          disabled={disabledButtons[button.key as keyof ConsoleData]}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
