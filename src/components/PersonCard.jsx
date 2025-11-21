import man from "../assets/hombre.png";
import accenture from "../assets/accentureLogo.png";
import vincufy from "../assets/vincufy1.png";
import clock from "../assets/clock1.png";
import star from "../assets/estrella.gif";
import { InfoMiniCard, InfoText } from ".";
import { useGetDeviceType } from "../hooks";

const PersonCard = () => {
  const { isDesktop } = useGetDeviceType();
  const flexDirection = isDesktop ? "flex-row" : "flex-col";

  return (
    <div
      className={`
        flex ${flexDirection}
        justify-around
        bg-[#181818]
        border rounded-[10px]
        w-[95%] m-auto p-6 mt-10 mb-10
        border-[rgb(173,173,173)]
      `}
    >
      <div>
        <InfoText />
        <img
          src={man}
          alt="man"
          className="drop-shadow-[1px_1px_3px_rgba(110,110,110,0.3)] my-[40px]"
          height="580px"
          width="315px"
        />
      </div>

      <div className={`${isDesktop ? "mt-[160px]" : "mt-[40px]"}`}>
        <InfoMiniCard icon={star} title="Frontend" />
        <InfoMiniCard
          icon={accenture}
          title="Accenture"
          subtitle="Current Job"
        />
        <InfoMiniCard icon={vincufy} title="Vincufy" subtitle="Side-project" />
        <InfoMiniCard icon={clock} title="3+" subtitle="Experience" />
      </div>
    </div>
  );
};

export default PersonCard;
