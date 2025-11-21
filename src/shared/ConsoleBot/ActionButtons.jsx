import styles from "./ConsoleBot.module.css";
import { consoleActionButtons } from "../../constants";

const ActionButtons = ({ disabledButtons, addLine }) => {
  return (
    <div className={styles.actionButtons}>
      {consoleActionButtons?.map((button) => (
        <button
          key={button.key}
          onClick={() => addLine(button.key)}
          disabled={disabledButtons[button.key]}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;
