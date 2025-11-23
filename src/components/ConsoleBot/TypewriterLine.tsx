import { useState, useEffect } from "react";
import { TypewriterLineProps } from "../../types";

const TypewriterLine: React.FC<TypewriterLineProps> = ({
  text,
  onDone,
  setShowEmptyLine,
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(
        `${text.slice(0, i + 1)}${i === text.length - 1 ? "" : "|"}`
      );
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setShowEmptyLine(true);
        onDone?.();
      }
    }, 45);
    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayed}</p>;
};

export default TypewriterLine;
