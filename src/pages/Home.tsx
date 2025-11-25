import PersonCard from "../components/Home/PersonCard";
import { useAppStore } from "../store";
import { Suspense, lazy } from "react";
import Loader from "../shared/Loader/Loader";

const ConsoleBot = lazy(() => import("../shared/ConsoleBot/ConsoleBot"));
const PortfolioBanner = lazy(() => import("../shared/PortfolioBanner"));
const Modal = lazy(() => import("../shared/Modal/Modal"));

interface HomeProps {
  setRunTour?: (run: boolean) => void;
}

const Home = ({ setRunTour }: HomeProps) => {
  const { isProfileEdited } = useAppStore();
  return (
    <>
      <PersonCard />
      <Suspense fallback={<Loader />}>
        <ConsoleBot />
      </Suspense>
      {!isProfileEdited && (
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
