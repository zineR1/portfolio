import { Loader } from "../shared";
import { PersonCard } from "../components";
import { useAppStore } from "../store";
import { Suspense, lazy } from "react";
import { useGetDeviceType } from "../hooks";

const ConsoleBot = lazy(() => import("../shared/ConsoleBot/ConsoleBot"));
const PortfolioBanner = lazy(() => import("../shared/PortfolioBanner"));
const Modal = lazy(() => import("../shared/Modal/Modal"));

interface HomeProps {
  setRunTour?: (run: boolean) => void;
}

const Home = ({ setRunTour }: HomeProps) => {
  const { isProfileEdited } = useAppStore();
  const { isDesktop } = useGetDeviceType();

  return (
    <>
      <PersonCard />
      <Suspense fallback={<Loader />}>
        <ConsoleBot />
      </Suspense>
      {!isProfileEdited && isDesktop && (
        <Suspense fallback={<Loader />}>
          <PortfolioBanner setRunTour={setRunTour} />
        </Suspense>
      )}
      <Suspense fallback={<Loader />}>
        <Modal />
      </Suspense>
    </>
  );
};

export default Home;
