import React from "react";

interface Props {
  position: string;
  setPosition: (value: string) => void;
  jobTitle: string;
  setJobTitle: (value: string) => void;
  setJobImage: (value: string) => void;
  sideProjectTitle: string;
  setSideProjectTitle: (value: string) => void;
  setSideProjectImage: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
}

const FavouriteCardsStepContent: React.FC<Props> = ({
  position,
  setPosition,
  jobTitle,
  setJobTitle,
  setJobImage,
  sideProjectTitle,
  setSideProjectTitle,
  setSideProjectImage,
  experience,
  setExperience,
}) => {
  const inputStyle =
    "w-[100%] h-[45px] text-[14px] outline-none border-none bg-[rgb(173,173,173)] rounded-[10px] shadow-[0_8px_16px_rgba(56,56,56,0.493)] px-[10px] box-border text-[#181818]";
  const buttonStyle =
    "bg-[#8207A3] w-[60%] h-[45px] text-[12px] text-[white] rounded-[5px] border-none hover:cursor-pointer";
  const inputButtonDivStyle = "flex gap-[10px] items-center";

  return (
    <>
      <h2 className="text-white text-[20px] font-[500] mb-[30px]">
        Share your professional highlights
      </h2>
      <div className="flex flex-col gap-[15px]">
        <input
          type="text"
          placeholder="Specialty (e.g. Frontend, UX/UI)"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className={inputStyle}
          maxLength={40}
        />
        <div className={inputButtonDivStyle}>
          <input
            type="text"
            placeholder="Current company name"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={inputStyle}
            maxLength={40}
          />
          <input
            type="file"
            accept="image/*"
            id="job-image-upload"
            style={{ display: "none" }}
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                if (file.size > 500 * 1024) {
                  alert("Image size must be less than 500KB.");
                  return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                  if (typeof reader.result === "string") {
                    setJobImage(reader.result);
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <button
            type="button"
            className={buttonStyle}
            onClick={() => document.getElementById("job-image-upload")?.click()}
          >
            Upload image
          </button>
        </div>
        <div className={inputButtonDivStyle}>
          <input
            type="text"
            placeholder="Side project name (optional)"
            value={sideProjectTitle}
            onChange={(e) => setSideProjectTitle(e.target.value)}
            className={inputStyle}
            maxLength={40}
          />
          <input
            type="file"
            accept="image/*"
            id="sideproject-image-upload"
            style={{ display: "none" }}
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                if (file.size > 500 * 1024) {
                  alert("Image size must be less than 500KB.");
                  return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                  if (typeof reader.result === "string") {
                    setSideProjectImage(reader.result);
                  }
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <button
            type="button"
            className={buttonStyle}
            onClick={() => document.getElementById("sideproject-image-upload")?.click()}
          >
            Upload image
          </button>
        </div>
        <input
          type="number"
          min={0}
          placeholder="Years of experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className={inputStyle}
        />
      </div>
    </>
  );
};

export default FavouriteCardsStepContent;
