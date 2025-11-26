import React from "react";

interface Props {
  role: string;
  setRole: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
}

const RoleStepContent: React.FC<Props> = ({
  role,
  setRole,
  description,
  setDescription,
}) => {
  const inputStyle =
    "my-[8px] w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[var(---color-bg-dark-black)]";

  return (
    <div className="flex-col gap-[15px] w-full">
      <h2 className="text-white text-[20px] font-[500] mb-[30px]">
        What is your role?
      </h2>
      <label htmlFor="role-input" className="sr-only">
        Role
      </label>
      <input
        id="role-input"
        type="text"
        placeholder="Role"
        value={role}
        maxLength={40}
        onChange={(e) => setRole(e.target.value)}
        className={inputStyle}
      />
      <label htmlFor="role-description-input" className="sr-only">
        Role description
      </label>
      <input
        id="role-description-input"
        type="text"
        placeholder="Role description (optional)"
        value={description}
        maxLength={40}
        onChange={(e) => setDescription(e.target.value)}
        className={inputStyle}
      />
    </div>
  );
};

export default RoleStepContent;
