import { InfoMiniCardProps } from "../../types";

const InfoMiniCard = ({ icon, title, subtitle = "" }: InfoMiniCardProps) => (
  <div
    className="flex items-center p-[18px] w-[320px] bg-[var(--color-bg-black)] border border-[rgb(173,173,173)]
 rounded-[10px] shadow-[0_9px_16px_rgba(56,56,56,0.493)] my-[20px]"
  >
    <img
      alt={title}
      src={icon}
      className="h-[48px] w-[48px] mr-[23%] rounded-[29px]"
      loading="lazy"
    />
    <div className="flex flex-col gap-[10px]">
      <h2 className="text-[18px] text-[white] leading-none m-0 p-0">{title}</h2>
      {subtitle && (
        <h3 className="text-[13px] leading-none m-0 p-0">{subtitle}</h3>
      )}
    </div>
  </div>
);

export default InfoMiniCard;
