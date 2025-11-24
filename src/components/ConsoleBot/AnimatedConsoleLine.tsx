import { useState } from "react";
import PromptLine from "./PromptLine";
import TypewriterLine from "./TypewriterLine";
import { AnimatedConsoleLineProps } from "../../types";

const AnimatedConsoleLine: React.FC<AnimatedConsoleLineProps> = ({
  line,
  setShowEmptyLine,
}) => {
  const [done, setDone] = useState(false);

  const value = Array.isArray(line?.value)
    ? line.value.join(", ")
    : line?.value;

  return (
    <>
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
    </>
  );
};

export default AnimatedConsoleLine;
