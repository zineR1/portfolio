import React from "react";
import { SoftSkillsStepContentProps } from "../../types";

const SoftSkillsStepContent: React.FC<SoftSkillsStepContentProps> = ({
  softSkillInputs,
  setSoftSkillInputs,
}) => {
  const isMaxLength = softSkillInputs?.length >= 2;

  return (
    <>
      <div className="flex flex-row items-center gap-[10px]">
        <h2 className="text-[white] text-[20px] font-[500]">
          Add your Soft Skills
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
              if (softSkillInputs.length === 0) {
                setSoftSkillInputs(["", ""]);
              } else {
                setSoftSkillInputs([...softSkillInputs, ""]);
              }
            }
          }}
        >
          Add more
        </button>
      </div>

      <div className="flex flex-col gap-[8px]">
        {(softSkillInputs.length === 0 ? [""] : softSkillInputs).map(
          (skill, idx) => (
            <div key={idx}>
              <label htmlFor={`soft-skill-${idx}`} className="sr-only">
                Soft skill {idx + 1}
              </label>

              <input
                id={`soft-skill-${idx}`}
                type="text"
                value={skill}
                maxLength={30}
                placeholder={`Skill ${idx + 1}`}
                className="w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[var(---color-bg-dark-black)]"
                onChange={(e) => {
                  const newSkills =
                    softSkillInputs.length === 0
                      ? [e.target.value]
                      : [...softSkillInputs];
                  newSkills[idx] = e.target.value;
                  setSoftSkillInputs(newSkills);
                }}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default SoftSkillsStepContent;
