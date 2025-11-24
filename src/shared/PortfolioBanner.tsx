import customPorftolio from "../assets/customPorftolio.png"

interface PortfolioBannerProps {
  setRunTour?: (run: boolean) => void;
}

const PortfolioBanner = ({ setRunTour }: PortfolioBannerProps) => {
  return (
    <div className="flex flex-row p-[35px] justify-center items-center gap-[250px] m-[15px] bg-[#141414] rounded-[10px] shadow-[0_9px_16px_rgba(56,56,56,0.493)]">
      <img src={customPorftolio} alt="Custom Portfolio" className="h-[220px]" />
      <div className="w-[33%] gap-[15px] flex flex-col">
        <div>
          <h2 className="text-[white] font-[500] text-[20px]">
            Would you like to see how this template would look for your own
            portfolio?
          </h2>
          <h2 className="text-[15px] text-[rgb(198,198,198)] font-[400]">
            I built this feature to show my passion for creating tools that help
            other users. Please note: this is a demo feature. Your data is saved
            only in your browser, so you can't share or use it as a real
            portfolio.
          </h2>
        </div>
        <div>
          <button
            className="bg-[#8207A3] w-[160px] h-[35px] text-[white] rounded-[5px] mt-[5px] border-none hover:cursor-pointer"
            onClick={() => setRunTour && setRunTour(true)}
          >
            Create yours!
          </button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioBanner;
