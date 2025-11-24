import React from "react";
import { TechStackStepContentProps } from "../../types";

const TechStackStepContent: React.FC<TechStackStepContentProps> = ({
  techInputs,
  setTechInputs,
}) => {
  const isMaxLength = techInputs?.length >= 2;
  return (
    <>
      <div className={"flex flex-row items-center gap-[10px]"}>
        <h2 className={"text-[white] text-[20px] font-[500]"}>
          Add your Tech Stack
        </h2>
        <button
          type="button"
          className={`h-[32px] text-[white] font-[500] text-[14px] border-none hover:cursor-pointer bg-[${
            isMaxLength ? "#aaa" : "#8207A3"
          }] cursor-${
            isMaxLength ? "not-allowed" : "pointer"
          }] rounded-[7px] p-[0_14px]`}
          disabled={techInputs.length >= 2}
          onClick={() => {
            if (techInputs.length < 2) setTechInputs([...techInputs, ""]);
          }}
        >
          Add more
        </button>
      </div>
      <div>
        <div className="flex flex-col gap-[8px]">
          {techInputs.map((_, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={`Tech ${idx + 1}`}
              className="w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[#181818]"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStackStepContent;
