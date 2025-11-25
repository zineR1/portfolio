import { useGetDeviceType } from "../../hooks";
import { useAppStore } from "../../store";
import { SocialLinks } from "../../shared";

const InfoText = () => {
  const { isDesktop } = useGetDeviceType();
  const { user } = useAppStore();

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-[20px] mt-[50px]">
        <h1 id="profile-name-h1" className="gradient-text text-[27px] font-[700] lg:text-[35px]">
          {user?.name}
        </h1>
        <div id="profile-social-icons">
          <SocialLinks />
        </div>
      </div>
      <div
        id="profile-role"
        className="my-[20px] mx-[20px] lg:my-[10px] lg:mx-0"
      >
        <h2 className="mt-[0] font-[500] text-[white] text-[19px]">
          {user?.role}
        </h2>
        <h3 className="mt-[10px] text-[15px]">{user.description}</h3>
      </div>
    </>
  );
};

export default InfoText;
