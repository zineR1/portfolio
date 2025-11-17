import { useGetDeviceType } from "../hooks";
import { usePortfolioStore } from "../store/usePortfolioStore";

const InfoText = () => {
  const { isDesktop } = useGetDeviceType();
  const { data } = usePortfolioStore();

  return (
    <>
      <h1
        className="mt-[60px] gradient-text"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {data?.name}
      </h1>

      <div className={!isDesktop && `mx-[50px]`}>
        <h2
          className="mt-[15px] font-light text-white text-[19px]"
          style={{
            fontFamily: "Source Code Pro, monospace",
            color: "white",
            fontWeight: 300,
          }}
        >
          {data?.role}
        </h2>
        <h3
          className="mt-[10px] text-[15px] text-[rgb(198, 198, 198)]"
          style={{
            fontFamily: "Source Code Pro, monospace",
            color: "rgb(198, 198, 198)",
            fontWeight: 300,
          }}
        >
          {data.description}
        </h3>
      </div>
    </>
  );
};

export default InfoText;
