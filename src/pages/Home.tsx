import PersonCard from "../components/Home/PersonCard";
import { ConsoleBot, PortfolioBanner } from "../shared";
import { useAppStore } from "../store";
import { useState, useEffect } from "react";

interface HomeProps {
  setRunTour?: (run: boolean) => void;
}

const Home = ({ setRunTour }: HomeProps) => {
  return (
    <>
      <PersonCard />
      <ConsoleBot />
      <PortfolioBanner setRunTour={setRunTour} />
    </>
  );
};

export default Home;
