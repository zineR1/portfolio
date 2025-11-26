import { useRef } from "react";
import styles from "./TopHeader.module.css";

const REPEAT = 20;
const TEXT = ["LOOKING FOR NEW CHALLENGES"];

const TopHeader = () => {
  const carousel = useRef<HTMLDivElement>(null);
  const openToWork = Array.from({ length: REPEAT }, () => TEXT[0]);

  return (
    <div className={styles.gral}>
      <div className={styles.container} ref={carousel}>
        <div className={styles.textDiv}>
          {openToWork.map((text, index) => (
            <h3 key={index}>{text}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
