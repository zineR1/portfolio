const InfoMiniCard = ({ icon, title, subtitle }) => (
  <div
    className="flex items-center p-[18px] w-[320px] bg-[var(--color-bg-black)] 
    border rounded-[10px] shadow-[0_9px_16px_rgba(56,56,56,0.493)] my-[40px]"
    style={{ borderColor: "rgb(173,173,173)" }}
  >
    <img src={icon} className="h-[48px] w-[48px] mr-[60px] rounded-[29px]" />
    <div className="flex flex-col gap-[3px]">
      <h2 className="text-[19px] text-white" style={{ color: "white" }}>
        {title}
      </h2>
      {subtitle && (
        <h3
          className="text-[14px] text-white font-light"
          style={{ fontFamily: "Source Code Pro, monospace", color: "rgb(200,200,200)" }}
        >
          {subtitle}
        </h3>
      )}
    </div>
  </div>
);

export default InfoMiniCard;
