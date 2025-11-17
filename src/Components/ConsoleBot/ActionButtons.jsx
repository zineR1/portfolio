import styles from "./ConsoleBot.module.css";

const ActionButtons = ({ disabledButtons, addLine }) => {
  const actionButtons = [
    { text: "About Me", key: "aboutMe" },
    { text: "Tech Stack", key: "techStack" },
    { text: "Location", key: "location" },
    { text: "Soft Skills", key: "softSkills" },
  ];

  return (
    <div className={styles.actionButtons}>
      {actionButtons.map((button) => (
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
