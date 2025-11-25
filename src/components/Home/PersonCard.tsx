import man from "../../assets/hombre.png";
import star from "../../assets/estrella.gif";
import company from "../../assets/company.png";
import project from "../../assets/project.png";
import clock from "../../assets/clock1.png";
import InfoText from "./InfoText";
import InfoMiniCard from "./InfoMiniCard";
import { useAppStore } from "../../store";
import { useGetDeviceType } from "../../hooks";

const PersonCard = () => {
  const { isDesktop } = useGetDeviceType();
  const user = useAppStore((state) => state.user);
  const isProfileEdited = useAppStore((state) => state.isProfileEdited);
  const resetUser = useAppStore((state) => state.resetUser);
  const flexDirection = isDesktop ? "flex-row" : "flex-col";

  return (
    <div
      className={`
        flex ${flexDirection}
        justify-around
        bg-[#181818]
        p-6
        rounded-bl-[80px]
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

      <div className={`${isDesktop ? "mt-[180px]" : "mt-[40px]"}`}>
        {isProfileEdited && (
          <button
            className="bg-[#8207A3] w-[250px] h-[35px] text-[white] rounded-[5px] mt-[5px] border-none hover:cursor-pointer"
            style={{ display: 'block', margin: '0 auto' }}
            onClick={resetUser}
          >
            Restore original portfolio
          </button>
        )}
        <div id="profile-cards-area">
          {user?.position && (
            <InfoMiniCard icon={star} title={user?.position} />
          )}
          <InfoMiniCard
            icon={user?.job?.image || company}
            title={user?.job?.title || 'Open to work'}
            subtitle={user?.job?.subtitle}
          />
          {user?.sideProject?.title && (
            <InfoMiniCard
              icon={user?.sideProject?.image || project}
              title={user?.sideProject?.title}
              subtitle={user?.sideProject?.subtitle}
            />
          )}
          <InfoMiniCard icon={clock} title={user?.experience || "0"} subtitle="Experience" />   
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
