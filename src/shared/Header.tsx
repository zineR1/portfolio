import brandLogo from "../assets/ziner1.png";
import { Navbar } from ".";
import { useGetDeviceType } from "../hooks";

const Header = () => {
  const { isDesktop } = useGetDeviceType();

  return (
    <div className="flex items-center justify-around border-b border-[rgb(173,173,173)] h-[100px]">
      <img
        className="h-[25px] w-[115px] sm:h-[30px] sm:w-[135px]"
        src={brandLogo}
        alt="logo"
      />
      {isDesktop && <Navbar />}
      <div className="flex flex-row items-center gap-[20px]">
        <select
          className="h-[40px] w-[210px] bg-[black] text-[white] rounded-[4px] border-none shadow-[0_12px_16px_rgba(48,48,48,0.49)] px-[12px] text-[13px] appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 hover:bg-neutral-900 cursor-pointer
            sm:w-[160px] xs:w-[120px]"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml;utf8,<svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="6,8 10,12 14,8" stroke="%23cccccc" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 7px center",
            backgroundSize: "20px 20px",
          }}
          onChange={() => {}}
        >
          <option value="en">English</option>
          <option value="es">Español (coming soon)</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
