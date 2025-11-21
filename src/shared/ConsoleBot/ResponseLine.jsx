import { useState, useEffect } from "react";
import PromptLine from "./PromptLine";

const TypewriterLine = ({ text, onDone, setShowEmptyLine }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(`${text.slice(0, i + 1)}${i === text.length - 1 ? "" : "|"}`);
      i++;

      if (i === text.length) {
        clearInterval(interval);
        setShowEmptyLine(true);
        onDone?.();
      }
    }, 45); // Velocidad del tipeo
    return () => clearInterval(interval);
  }, [text]);

  return <p>{displayed}</p>;
};

const AnimatedConsoleLine = ({ line, setShowEmptyLine }) => {
  const [done, setDone] = useState(false);

  const value = Array.isArray(line?.value)
    ? line.value.join(", ")
    : line?.value;

  return (
    <div>
      <TypewriterLine
        text={`$ ${line.key}`}
        onDone={() => setDone(true)}
        setShowEmptyLine={setShowEmptyLine}
      />
      {done && (
        <>
          <p>{value}</p>
          <PromptLine />
        </>
      )}
    </div>
  );
};

/* ---------------------------------------------
   COMPONENTE PRINCIPAL
---------------------------------------------- */
const ResponseLine = ({ renderedData, setShowEmptyLine }) => {
  return (
    <>
      {renderedData?.map((line, index) => (
        <AnimatedConsoleLine
          key={index}
          line={line}
          setShowEmptyLine={setShowEmptyLine}
        />
      ))}
    </>
  );
};

export default ResponseLine;
