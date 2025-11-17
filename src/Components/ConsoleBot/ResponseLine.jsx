import { PromptLine } from "../";

const ResponseLine = ({ renderedData }) => {
  return (
    <>
      {renderedData?.map((line, index) => (
        <div key={index}>
          <p>{`$ ${line.key}`}</p>
          <p>
            {Array.isArray(line?.value) ? line?.value.join(", ") : line?.value}
          </p>
          <PromptLine />
        </div>
      ))}
    </>
  );
};

export default ResponseLine;
