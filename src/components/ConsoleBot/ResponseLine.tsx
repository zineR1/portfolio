import AnimatedConsoleLine from "./AnimatedConsoleLine";
import { ResponseLineProps } from "../../types";

const ResponseLine: React.FC<ResponseLineProps> = ({
  renderedData,
  setShowEmptyLine,
}) => {
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
