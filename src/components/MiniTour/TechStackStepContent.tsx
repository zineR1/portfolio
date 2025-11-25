import React from "react";
import { TechStackStepContentProps } from "../../types";

const TechStackStepContent: React.FC<TechStackStepContentProps> = ({
  techInputs,
  setTechInputs,
}) => {
  const isMaxLength = techInputs?.length >= 2;

  return (
    <>
      <div className="flex flex-row items-center gap-[10px]">
        <h2 className="text-[white] text-[20px] font-[500]">
          Add your Tech Stack
        </h2>
        <button
          type="button"
          className={`h-[32px] text-[white] font-[500] text-[14px] border-none hover:cursor-pointer bg-[${
            isMaxLength ? "#aaa" : "#8207A3"
          }] cursor-${
            isMaxLength ? "not-allowed" : "pointer"
          } rounded-[7px] p-[0_14px]`}
          disabled={isMaxLength}
          onClick={() => {
            if (!isMaxLength) {
              if (techInputs.length === 0) {
                setTechInputs(["", ""]);
              } else {
                setTechInputs([...techInputs, ""]);
              }
            }
          }}
        >
          Add more
        </button>
      </div>
      <div className="flex flex-col gap-[8px]">
        {(techInputs.length === 0 ? [""] : techInputs).map((tech, idx) => (
          <div key={idx}>
            <label htmlFor={`tech-${idx}`} className="sr-only">
              Tech {idx + 1}
            </label>

            <input
              id={`tech-${idx}`}
              type="text"
              value={tech}
              maxLength={30}
              placeholder={`Tech ${idx + 1}`}
              className="w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[var(---color-bg-dark-black)]"
              onChange={(e) => {
                const newTechs =
                  techInputs.length === 0 ? [e.target.value] : [...techInputs];
                newTechs[idx] = e.target.value;
                setTechInputs(newTechs);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStackStepContent;
