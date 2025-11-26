import brandLogo from "../assets/ziner1.png";
import { Navbar } from ".";
import { useGetDeviceType } from "../hooks";

const Header = () => {
  const { isDesktop } = useGetDeviceType();

  return (
    <div className="flex items-center justify-center lg:justify-between gap-4 px-4 lg:px-12 border-b border-[rgb(173,173,173)] h-[100px] w-full max-w-screen overflow-x-visible">
      <img
        className="h-[25px] w-[115px] xs:h-[28px] xs:w-[125px] sm:h-[30px] sm:w-[135px] lg:h-[32px] lg:w-[145px]"
        src={brandLogo}
        alt="logo"
      />
      {isDesktop && <Navbar />}
    </div>
  );
};

export default Header;
